module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Category', {
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoryName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Category',
    freezeTableName: true,
  }
);};
