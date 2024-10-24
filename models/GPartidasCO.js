const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPartidasCO', {
    NUMERO: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CLASIFARANCEL: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    CRITERIOPREFERENCIAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESPRODUCTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ENCASONO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COSTONETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PAISORIGEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GPartidasCO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ParCer_FKNumCOParte",
        unique: true,
        fields: [
          { name: "NUMERO" },
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
