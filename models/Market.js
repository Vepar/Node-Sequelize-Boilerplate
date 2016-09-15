module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Market', {
    MarketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Market: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Market',
    freezeTableName: true,
  }
);};
