const {Router} = require('express');

const router = Router();

router.route('/')
.get((req, res) => {
  res.send('Welcome to the api');
})
module.exports = {router}