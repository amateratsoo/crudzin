const Sequelize = require('sequelize');
const sequelize = new Sequelize('crudzin', 'root', 'qwerty', {

  host: 'localhost',
  dialect: 'mysql'

});



module.exports = {

  Sequelize,
  sequelize

}
