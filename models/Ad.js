module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Ad', {
    AdId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    //UserId will be generated automatically
    //MarketId will be generated automatically
    //CategoryId will be generated automatically
    //AdStateId will be generated automatically
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Price: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MarketId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PreferredContactMethod: {
      type: DataTypes.ENUM,
      values: ['Email', 'Call', 'Text'],
      allowNull: true
    }
  },
  {
    tableName: 'Ad',
    freezeTableName: true,
  }
);
};
