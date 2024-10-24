const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisEntities', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAENTITI: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CONSIGNEEKEY: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    LPCOAUTHPARTYKEY: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    GROWERKEY: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    BROKERKEY: {
      type: DataTypes.STRING(19),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisEntities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAEN_ConsecAphisLinEn",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
          { name: "LINEAENTITI" },
        ]
      },
    ]
  });
};
