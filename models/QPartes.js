const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPartes', {
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTECOM: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    DESCRIPCIONE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    DESCRIPCIONI: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CLASE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    COSTOUNITARIO: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    TIPOMONEDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLAVEMONEDA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PESOUNITARIO: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    TIPOPESO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPOFRACCION: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FECHAMODIFICA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FOTOPARTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHAMODIFICA_ISO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FRACCIONAME: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    HABILITADADESHABILITADA: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    FECHACREACIONPARTE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLAVEFDA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CLAVEFCC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LICENSECODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ECCN: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EXPORTCODE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SIMBOLOEXCLIC: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QPartes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "QParte_PKNumParte",
        unique: true,
        fields: [
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
