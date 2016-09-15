module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {

    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastAccess: {
      type: DataTypes.DATE,
      allowNull:false
    },
    LastLogin: {
      type: DataTypes.DATE,
      allowNull:false
    },
    SessionToken: {
      type: DataTypes.STRING(1234),
      allowNull:false
    }
  },
  {
    tableName: 'User',
    freezeTableName: true,
  });
};
