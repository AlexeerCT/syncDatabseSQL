// models/ConnCliente.js
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      IdCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Empresa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      NombreBD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      UsuarioBD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PasswordBD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ServerBD: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PuertoBD: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      // Opciones adicionales
      tableName: 'GConexiones', 
      timestamps: false, 
    });
  
    return Cliente;
  };
  