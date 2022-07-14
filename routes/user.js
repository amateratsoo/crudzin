const express = require('express');
const router = express.Router();

const Users = require('../models/Users');


router.get('/create-user', (req, res) => {

  res.render('createUser');

});


router.post('/new-user', async (req, res) => {

  const userData = req.body;
  await Users.create({

    name: userData.name,
    password: userData.password

  })

  res.redirect('http://localhost:3001/create-user');

});


module.exports = router;
