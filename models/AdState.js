module.exports = function(sequelize, DataTypes) {
  return  sequelize.define('AdState', {
    AdStateId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    AdState: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'AdState',
    freezeTableName: true,
  }
);};
