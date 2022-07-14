const db = require('./db');


const Users = db.sequelize.define('users', {

  id: {

    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,

  },

  name: {

    type: db.Sequelize.STRING,
    allowNull: false

  },

  password: {

    type: db.Sequelize.STRING,
    allowNull: false

  }

});


module.exports = Users;
