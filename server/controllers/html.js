const express = require('express');
const path = require('path');

const router = express.Router();
if (process.env.NODE_ENV === 'production') {
  router.use(express.static(path.join(__dirname, '../../client/build')));
  router.route('*')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
  })
} else {
  router.route('/')
  .get((req, res) => {
    res.send('This page will be replaced with the built client in production');
  })
}

module.exports = {router}