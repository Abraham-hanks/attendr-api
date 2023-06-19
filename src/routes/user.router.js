const express = require('express');
const ValidationMiddleware = require('../middlewares/validation.middleware');
const UserService = require('../services/user.service');

const router = express.Router();

router.post(
  '/register',
  ValidationMiddleware.validateRegisterUser,
  UserService.registerUser
);

router.post('/login', UserService.loginUser);

module.exports = router;