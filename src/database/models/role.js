'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {foreignKey: 'roleName'})
    }
  }
  Role.init({
    roleName: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'roles',
    modelName: 'Role',
  });
  return Role;
};