const express = require('express');
import * as ValidationMiddleware from "../middlewares/validation.middleware";
import UserService from "../services/user.service";

const router = express.Router();
export default router;

router.post(
  '/register',
  ValidationMiddleware.validateRegisterUser,
  UserService.registerUser
);
