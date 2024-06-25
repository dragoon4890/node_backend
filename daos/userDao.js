const User = require('../models/userModel');

const findAllUsers = () => User.find({ isDeleted: false });

const findUserById = (userId) => User.findById(userId);

const createUser = (userData) => User.create(userData);

const updateUser = (userId, userData) => User.findByIdAndUpdate(userId, userData, { new: true });

const deleteUser = (userId) => User.findByIdAndUpdate(userId, { isDeleted: true });

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
