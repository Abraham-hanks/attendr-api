const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
module.export = class UserService {

  // creates a user in the database
  async registerUser(req, res) {
    try {
      const { first_name, last_name, matriculation_no, password, email, user_type, current_level, faculty_id, department_id, programme_id } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ matriculation_no });
      if (existingUser) {
        return res.status(409).json({ message: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = new User({
        first_name,
        last_name,
        matriculation_no,
        password: hashedPassword,
        email,
        user_type,
        current_level,
        faculty_id,
        department_id,
        programme_id
      });

      // Save the user to the database
      await newUser.save();

      // Generate an authentication token
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

      // Return the token
      res.status(201).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
  }

  async loginUser(req, res) {
    try {
      const { matriculation_no, password } = req.body;

      // Check if the user exists
      const user = await User.findOne({ matriculation_no });
      if (!user) {
        return res.status(401).json({ message: 'Invalid matriculation number or password' });
      }

      // Check if the password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid matriculation number or password' });
      }

      // Generate an authentication token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

      // Return the token
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred' });
    }
    // throw new Error('Not implemented');
  }
}
