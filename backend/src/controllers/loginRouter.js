const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

loginRouter.post('/', async(req, res) => {
  const {username = ' ', password = ''} = req.body;

  const findUser = await User.findOne({username});
  const passwordUser = findUser === null
    ? false
    : await bcrypt.compare(password, findUser.password);

  if (!(passwordUser && findUser)) {
    return res.status(401).json({
      error: 'Invalid user or password'
    });
  }
  const userForToken = {
    id: findUser._id,
    userName: findUser.userName,
    type: findUser.type
  };

  const token = jwt.sign(userForToken, process.env.WORD_SECRET);
  res.send({
    name: findUser.name,
    type: findUser.type,
    lastName: findUser.lastName,
    motherLastName: findUser.motherLastName,
    email: findUser.email,
    userName: findUser.userName,
    token
  });
});

module.exports = loginRouter;