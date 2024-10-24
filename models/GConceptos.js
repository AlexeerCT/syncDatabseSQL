const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GConceptos', {
    CLAVE: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    DESCRIPCIONINGLES: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    DESCRIPCIONDETALLADA: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    PRIORIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRIORIDADAME: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PRIMERTOTAL: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    TIPO: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    SEIMPRIME: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    SECCION: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CLASIFICACION: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GConceptos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Concep_PKClave",
        unique: true,
        fields: [
          { name: "CLAVE" },
        ]
      },
    ]
  });
};
