const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

// config

app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// routes

const createUser = require('./routes/user');
app.use('/', createUser);


app.listen(3001, () => {

  console.log('O pai tá on 🔥');

});
