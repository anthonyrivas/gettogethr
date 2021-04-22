const { Router } = require('express');
const { htmlRouter } = require('./html');
const { apiRouter } = require('./api');

const router = Router();
router.use('/api', apiRouter);
router.use('/', htmlRouter);

module.exports = { router }