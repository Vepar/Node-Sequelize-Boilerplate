module.exports = function(sequelize, DataTypes) {
  return  sequelize.define('Adimage', {
    AdImageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    //AdId will be generated automatically
    ImageUri: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    Order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'AdImage',
    freezeTableName: true,
  }
);};
