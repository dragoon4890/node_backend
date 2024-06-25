const userService = require('../services/userService');
const { userSchema, idSchema } = require('../dtos/userDto');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const { error } = idSchema.validate({ userId });
  if (error) return res.status(400).json({ msg: error.details[0].message });

  try {
    const user = await userService.getUserById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const createUser = async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { error: idError } = idSchema.validate({ userId });
  if (idError) return res.status(400).json({ msg: idError.details[0].message });

  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ msg: error.details[0].message });

  try {
    const user = await userService.updateUser(userId, req.body);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;
  const { error } = idSchema.validate({ userId });
  if (error) return res.status(400).json({ msg: error.details[0].message });

  try {
    const user = await userService.deleteUser(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
