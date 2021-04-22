const express = require('express');
const path = require('path');

const htmlRouter = express.Router();
if (process.env.NODE_ENV === 'production') {
  htmlRouter.use(express.static(path.join(__dirname, '../../client/build')));
  htmlRouter.route('*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '../../client/build/index.html'));
    })
} else {
  htmlRouter.route('/')
    .get((req, res) => {
      res.send('This page will be replaced with the built client in production');
    })
}

module.exports = { htmlRouter }