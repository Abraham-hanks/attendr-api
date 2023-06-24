const validateRegisterUser = (req, res, next) => {
  const { first_name, last_name, matriculation_no, password, email, user_type, current_level, faculty_id, department_id, programme_id } = req.body;
  const errorMessages = [];

  // Validate required fields
  if (!first_name) {
    errorMessages.push('First name is required');
  }
  if (!last_name) {
    errorMessages.push('Last name is required');
  }
  if (!matriculation_no) {
    errorMessages.push('Matriculation number is required');
  }
  if (!password) {
    errorMessages.push('Password is required');
  }
  if (!email) {
    errorMessages.push('Email is required');
  }
  if (!user_type) {
    errorMessages.push('User type is required');
  }
  if (!current_level) {
    errorMessages.push('Current level is required');
  }
  if (!faculty_id) {
    errorMessages.push('Faculty ID is required');
  }
  if (!department_id) {
    errorMessages.push('Department ID is required');
  }
  if (!programme_id) {
    errorMessages.push('Programme ID is required');
  }

  // Check for any errors
  if (errorMessages.length > 0) {
    return res.status(400).json({ errors: errorMessages });
  }

  next();
}

module.exports = {
  validateRegisterUser
};
