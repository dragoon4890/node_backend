const userDao = require('../daos/userDao');

const getAllUsers = async () => userDao.findAllUsers();

const getUserById = async (userId) => userDao.findUserById(userId);

const createUser = async (userData) => userDao.createUser(userData);

const updateUser = async (userId, userData) => userDao.updateUser(userId, userData);

const deleteUser = async (userId) => userDao.deleteUser(userId);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
