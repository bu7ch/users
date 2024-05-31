const User = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = new User({ name, email });
    await user.save();
    res.json({message: 'User created successfully', user})
  } catch (error) {
    res.json(error)
  }
};

module.exports = { allUsers, createUser };
