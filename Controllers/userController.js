const User = require('../Models/User');

const createUser = async (req, res, next) => {
  const newUser = await User.create({});

  return res.json(newUser);
};

module.exports = {
  createUser,
};
