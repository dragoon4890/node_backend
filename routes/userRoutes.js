const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middleware/auth');
const validate = require('../middleware/validate');
const { userSchema, idSchema } = require('../dtos/userDto');

const router = express.Router();

router.get('/worko/user', getAllUsers);
router.get('/worko/user/:userId', getUserById);
router.post('/worko/user', validate(userSchema), createUser);
router.put('/worko/user/:userId', authenticate, validate(userSchema), updateUser);
router.patch('/worko/user/:userId', authenticate, validate(userSchema), updateUser);
router.delete('/worko/user/:userId', authenticate, deleteUser);

module.exports = router;
