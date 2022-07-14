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

  res.redirect('http://localhost:3001/all-users');

});


router.get('/all-users', async (req, res) => {

  const allUsers = await Users.findAll();
  
  res.render('allUsers', { allUsers });

});


router.get('/update-user/:id', (req, res) => {

  res.render('updateUser', { id: req.params.id });

});


router.post('/save-user/:id', async (req, res) => {

  const newUserData = req.body;
  const id = req.params.id;

  await Users.update({

    name: newUserData.name,
    password: newUserData.password

  }, 
  
  {

    where: {

      id: id

    }

  });


  res.redirect('http://localhost:3001/all-users');

});


module.exports = router;
