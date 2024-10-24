const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('QPermisoPR', {
    NUMSOLICITUD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    FECHA_ENTREGA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    PAGINARENGLON: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'QPermisoPR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "perPR_PKSoliFechLin",
        unique: true,
        fields: [
          { name: "NUMSOLICITUD" },
          { name: "FECHA_ENTREGA" },
          { name: "LINEA" },
        ]
      },
    ]
  });
};
