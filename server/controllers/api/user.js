const { Router } = require('express');

const userRouter = Router();

userRouter.route('/')
  .get((req, res) => {
    res.json({ message: 'These are user routes' });
  })

module.exports = { userRouter }