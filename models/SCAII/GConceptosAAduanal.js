const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConceptosAAduanal', {
    CLAVEAA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    IMPORTE: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    PRIORIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GConceptosAAduanal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ConAA_AKConcepto",
        fields: [
          { name: "CONCEPTO" },
        ]
      },
      {
        name: "ConAA_PKClaveAAConcepto",
        unique: true,
        fields: [
          { name: "CLAVEAA" },
          { name: "CONCEPTO" },
        ]
      },
    ]
  });
};
