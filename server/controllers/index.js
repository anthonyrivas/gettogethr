const {Router} = require('express');
const {router: html} = require('./html.js');
const {router: api} = require('./api.js');

const router = Router();
router.use('/api', api);
router.use('/', html);

module.exports = {router}