const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GDotInformation', {
    CLAVEDOT: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    BOXNUMBER: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PGMCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    INTNDUSECODE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    INTNDUSEDESC: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    DISCLAIMER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CATTYPECODE: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CATCODE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    BRANDNAME: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    MODEL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MANUFMONTH: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MANUFYEAR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MODELYEAR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DRIVESIDE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EMBASSYCO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PASSPORTCO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PASSPORTNO: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    SURETYCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    BONDSERIAL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BONDQUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BONDAMT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FABMANUFKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    RETDISTKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CERTINDKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    OWNERKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    OEIKEY: {
      type: DataTypes.STRING(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GDotInformation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DOT01CLAVEDOT",
        unique: true,
        fields: [
          { name: "CLAVEDOT" },
        ]
      },
    ]
  });
};
