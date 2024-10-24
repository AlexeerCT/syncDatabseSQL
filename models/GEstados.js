const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GEstados', {
    CLAVEM3: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    CLAVE_MEX: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CLAVE_AME: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'GEstados',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GenEst_PKClaveM3Desc",
        unique: true,
        fields: [
          { name: "CLAVEM3" },
          { name: "DESCRIPCION" },
        ]
      },
    ]
  });
};
