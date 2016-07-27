'use strict';

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: {type:DataTypes.STRING,
            allowNull:true
          },
    },
  {
    timestamps: false
  },
  {
    classMethods: {
      associate: (models) => {
      }
    }
  });

  return User;
};
