// models/ConnCliente.js
module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
      Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      Server: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Puerto: {
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
  