const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

// config

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// connection to the db

const db = require('./models/db');
const Users = require('./models/Users');


const dbConnection = async () => {

  await db.sequelize.authenticate();
  console.log('👉 Database says: Hello from the otherside');

  await Users.sync();
  console.log('👉  All tables have been created');

}



// routes

const createUser = require('./routes/user');
app.use('/', createUser);


app.listen(3001, () => {

  console.log('O pai tá on 🔥');
  dbConnection();

});
