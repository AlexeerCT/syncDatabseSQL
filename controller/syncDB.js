const { Sequelize } = require('sequelize');
require('dotenv').config();
const { sequelizeCentral } = require('../config/database');
const Cliente = require('../models/ConnCliente')(sequelizeCentral, Sequelize.DataTypes);

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const replicateDatabase = async (client) => {
    const { NombreBD, UsuarioBD, PasswordBD, Server, Puerto, Empresa } = client;
    console.log(`Sincronizando datos del cliente: ${Empresa} en ${Server}`);
  
    // Conexión a la base de datos del cliente
    const sequelizeCliente = new Sequelize(NombreBD, UsuarioBD, PasswordBD, {
        host: Server,
        port: Puerto,
        dialect: 'mssql',
        logging: false,
    });
    
    let sequelizeNuevaBD = null;

    try {
        // Autenticación en la base de datos del cliente
        await sequelizeCliente.authenticate();
        console.log(`Conectado a la base de datos del cliente: ${Empresa}`);
  
        // Verificar si la base de datos ya existe
        const dbExists = await sequelizeCentral.query(`SELECT name FROM sys.databases WHERE name = '${NombreBD}'`, { type: Sequelize.QueryTypes.SELECT });
        
        if (dbExists.length <= 0) {
            // Crear la nueva base de datos si no existe
            await sequelizeCentral.query(`CREATE DATABASE [${NombreBD}]`);
            console.log(`Nueva base de datos '${NombreBD}' creada.`);
        }
         
        // Conexión a la base de datos por actualizar
        sequelizeNuevaBD = new Sequelize(NombreBD, DB_USER, DB_PASSWORD, {
            host: DB_HOST,
            port: DB_PORT,
            dialect: 'mssql',
            logging: false,
        });
  
        // Obtener las tablas de la base de datos del cliente
        const tables = await sequelizeCliente.getQueryInterface().showAllTables();
        const tableNames = tables.map(table => typeof table === 'string' ? table : table.tableName || table.name);
  
        for (const tableName of tableNames) {
            if (tableName != 'SFacExp') {
                console.log(`Saltando la tabla ${tableName} (no se replicará).`);
                continue; // Saltar esta tabla y continuar con la siguiente
            }
        
            // Obtener los datos de la tabla del cliente
            const data = await sequelizeCliente.query(`SELECT * FROM ${tableName}`, { type: Sequelize.QueryTypes.SELECT });
        
            if (data.length > 0) {
                for (const row of data) {
                    // Convertir FECHAFACTURA a objeto Date si existe
                    if (row['FECHAFACTURA_ISO']) {
                        const date = new Date(row['FECHAFACTURA_ISO']);
                        row['FECHAFACTURA_ISO'] = date.toISOString(); // Convierte a formato ISO
                    }
                
                    // Verificar si el registro ya existe en la nueva base de datos
                    const primaryKey = Object.keys(row)[0]; // Suponiendo que la primera columna es la clave primaria
                    const existingRecord = await sequelizeNuevaBD.query(
                        `SELECT * FROM ${tableName} WHERE ${primaryKey} = :primaryKeyValue`,
                        { replacements: { primaryKeyValue: row[primaryKey] }, type: Sequelize.QueryTypes.SELECT }
                    );
                
                    if (existingRecord.length > 0) {
                        // Si existe, comparar solo los campos relevantes
                        const record = existingRecord[0];
                        const hasChanges = Object.keys(row).some(column => {
                            return row[column] !== record[column];
                        });
                
                        if (hasChanges) {
                            // Realizar actualización solo de los campos que han cambiado
                            await sequelizeNuevaBD.getQueryInterface().bulkUpdate(tableName, row, { [primaryKey]: row[primaryKey] });
                            console.log(`Registro en la tabla ${tableName} actualizado: ID ${row[primaryKey]}`);
                        } else {
                            console.log(`No hay cambios para el registro en la tabla ${tableName}: ID ${row[primaryKey]}`);
                        }
                    } else {
                        // Si no existe, insertar nuevo registro
                        await sequelizeNuevaBD.getQueryInterface().bulkInsert(tableName, [row]);
                        console.log(`Nuevo registro insertado en la tabla ${tableName}: ID ${row[primaryKey]}`);
                    }
                }
            } else {
                console.log(`No hay datos nuevos para sincronizar en la tabla ${tableName}.`);
            }
        }
  
    } catch (error) {
        console.error(`Error sincronizando la base de datos del cliente ${Empresa}:`, error);
    } finally {
        // Cierra las conexiones
        await sequelizeCliente.close();
        if (sequelizeNuevaBD) {
            await sequelizeNuevaBD.close();
        }
    }
};
  
const replicateAllDatabases = async () => {
    try {
        const clientes = await Cliente.findAll(); // Obtener todos los clientes
        console.log(`Se encontraron ${clientes.length} clientes para sincronizar.`);
    
        for (const cliente of clientes) {
            await replicateDatabase(cliente.dataValues); // Pasa los datos de conexion del cliente a la función
        }
    } catch (error) {
        console.error('Error al sincronizar las bases de datos:', error);
    } finally {
        // Cierra la conexión central
        await sequelizeCentral.close();
    }
};

module.exports = { replicateDatabase, replicateAllDatabases };
