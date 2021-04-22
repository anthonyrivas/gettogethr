const { Router } = require('express');

const meetingRouter = Router();

meetingRouter.route('/')
  .get((req, res) => {
    res.json({ message: 'These are meeting routes' });
  })

module.exports = { meetingRouter }