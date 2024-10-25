const { Sequelize } = require('sequelize');
require('dotenv').config();
const { sequelizeCentral } = require('../config/database');
const Cliente = require('../models/ConnCliente')(sequelizeCentral, Sequelize.DataTypes);

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const replicateDatabase = async (client) => {
    const { NombreBD, UsuarioBD, PasswordBD, ServerBD, PuertoBD, Empresa } = client;
    console.log(`Sincronizando datos del cliente: ${Empresa} en ${ServerBD}`);

    const sequelizeCliente = new Sequelize(NombreBD, UsuarioBD, PasswordBD, {
        host: ServerBD,
        port: PuertoBD,
        dialect: 'mssql',
        logging: false,
    });
    let total = 0
    let sequelizeNuevaBD = null;

    try {
        total = total + 1

        await sequelizeCliente.authenticate();
        console.log(`Conectado a la base de datos del cliente: ${Empresa}`);

        const dbExists = await sequelizeCentral.query(`SELECT name FROM sys.databases WHERE name = '${NombreBD}'`, { type: Sequelize.QueryTypes.SELECT });

        if (dbExists.length <= 0) {
            await sequelizeCentral.query(`CREATE DATABASE [${NombreBD}]`);
            console.log(`Nueva base de datos '${NombreBD}' creada.`);
        }

        sequelizeNuevaBD = new Sequelize(NombreBD, DB_USER, DB_PASSWORD, {
            host: DB_HOST,
            port: DB_PORT,
            dialect: 'mssql',
            logging: false,
        });

        const tables = await sequelizeCliente.getQueryInterface().showAllTables();
        const tableNames = tables.map(table => typeof table === 'string' ? table : table.tableName || table.name);

        for (const tableName of tableNames) {
            if (tableName !== 'SFacExp') {
                console.log(`Saltando la tabla ${tableName} (no se replicará).`);
                continue;
            }

            const data = await sequelizeCliente.query(`SELECT * FROM ${tableName}`, { type: Sequelize.QueryTypes.SELECT });

            if (data.length > 0) {
                for (const row of data) {
                    if (row['FECHAFACTURA_ISO']) {
                        const date = new Date(row['FECHAFACTURA_ISO']);
                        row['FECHAFACTURA_ISO'] = date.toISOString();
                    }

                    const primaryKey = Object.keys(row)[0];
                    const existingRecord = await sequelizeNuevaBD.query(
                        `SELECT * FROM ${tableName} WHERE ${primaryKey} = :primaryKeyValue`,
                        { replacements: { primaryKeyValue: row[primaryKey] }, type: Sequelize.QueryTypes.SELECT }
                    );

                    if (existingRecord.length > 0) {
                        const record = existingRecord[0];
                        const hasChanges = Object.keys(row).some(column => {
                            if (column === 'FECHAFACTURA_ISO') {
                                const newDate = new Date(row[column]).getTime();
                                const existingDate = new Date(record[column]).getTime();
                                return newDate !== existingDate;
                            }
                            return row[column] !== record[column];
                        });

                        if (hasChanges) {
                            await sequelizeNuevaBD.getQueryInterface().bulkUpdate(tableName, row, { [primaryKey]: row[primaryKey] });
                            console.log(`Registro en la tabla ${tableName} actualizado: ID ${row[primaryKey]}`);
                            for (const column in row) {
                                if (row[column] !== record[column]) {
                                    console.log(`Actualizando ${column} a ${row[column]} (anterior: ${record[column]})`);
                                }
                            }
                        } else {
                            console.log(`No hay cambios para el registro en la tabla ${tableName} de ${NombreBD}: ID ${row[primaryKey]}`);
                        }
                        
                    } else {
                        await sequelizeNuevaBD.getQueryInterface().bulkInsert(tableName, [row]);
                        console.log(`Nuevo registro insertado en la tabla ${tableName} de ${NombreBD}: ID ${row[primaryKey]}`);
                    }
                }
                console.log(total)
            } else {
                console.log(`No hay datos nuevos para sincronizar en la tabla ${tableName}.`);
            }
        }

    } catch (error) {
        console.error(`Error sincronizando la base de datos del cliente ${Empresa}:`, error);
    } finally {
       await sequelizeCliente.close();
       if (sequelizeNuevaBD) {
           await sequelizeNuevaBD.close();
       }
    }
};

const replicateAllDatabases = async () => {
    try {
        const clientes = await Cliente.findAll();
        console.log(`Se encontraron ${clientes.length} clientes para sincronizar.`);

        // Crear un array de promesas para las sincronizaciones
        const promises = clientes.map(cliente => replicateDatabase(cliente.dataValues));
        
        // Ejecutar todas las promesas en paralelo
        await Promise.all(promises);
    } catch (error) {
        console.error('Error al sincronizar las bases de datos:', error);
    } finally {
        //await sequelizeCentral.close();
    }
};

const runReplication = async () => {
    while (true) {
        await replicateAllDatabases();
        console.log("Sincronización completada, reiniciando...");
        // Esperar un tiempo si es necesario antes de la próxima ejecución
        await new Promise(resolve => setTimeout(resolve, 5000)); // Espera 5 segundos
    }
};

// Iniciar el proceso
runReplication();

module.exports = { replicateDatabase, replicateAllDatabases };
