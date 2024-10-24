const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GTransportes', {
    CLAVETRANSPORTE: {
      type: DataTypes.STRING(14),
      allowNull: false,
      primaryKey: true
    },
    CLAVETRANSACE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CLAVETRANS: {
      type: DataTypes.STRING(23),
      allowNull: true
    },
    NUMIDENTIFICATRANS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TIPOTRANSPORTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CODENTIDADIIT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMTRANSPONDEDOR: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    NUMERODOT: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NUMEROPLACAS: {
      type: DataTypes.STRING(17),
      allowNull: true
    },
    CIUDAD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PRECINTO: {
      type: DataTypes.STRING(49),
      allowNull: true
    },
    NOMEMPASEGURADORA: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NUMEROASEGURANZA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTOASEGURANZA: {
      type: DataTypes.DECIMAL(13,2),
      allowNull: true
    },
    FECHAASEGURANZA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMEROCAJA: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ANIO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SERIE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NUMMOTOR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PERMISOSCT: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COLOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVECONTENEDOR: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GTransportes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GTrans_PKClaveTransp",
        unique: true,
        fields: [
          { name: "CLAVETRANSPORTE" },
        ]
      },
    ]
  });
};
