const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPaisReglaOct', {
    PERMISO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FRACCION: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    CLAVEM3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GPaisReglaOct',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PaiOct_FKPermiLinPais",
        fields: [
          { name: "PERMISO" },
          { name: "LINEA" },
          { name: "CLAVEM3" },
        ]
      },
      {
        name: "PaiOct_PKPermiFraccLinPais",
        unique: true,
        fields: [
          { name: "PERMISO" },
          { name: "LINEA" },
          { name: "FRACCION" },
          { name: "CLAVEM3" },
        ]
      },
    ]
  });
};
