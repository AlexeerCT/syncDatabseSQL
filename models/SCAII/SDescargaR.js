const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaR', {
    CONSECUTIVOEXPO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTURAEXPO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    NUMPARTEMP: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CANTEQUIVALENTE: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UMEQUIVALENTE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LINEAEXPO: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesRep_PKConsecLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVOEXPO" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
