const { Router } = require('express');
const { meetingRouter } = require('./meeting');
const { userRouter } = require('./user');

const apiRouter = Router();

apiRouter.use('/user', userRouter)
apiRouter.use('/meeting', meetingRouter)

module.exports = { apiRouter }