const express = require('express');
const router = express.Router();


router.get('/create-user', (req, res) => {

  res.render('createUser');

});


module.exports = router;
