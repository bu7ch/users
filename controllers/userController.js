const User = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { allUsers };
