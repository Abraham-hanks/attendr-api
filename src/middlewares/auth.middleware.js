
export const authenticateUser = (req, res, next) => {
  // authentication logic
  const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  try {
    // Verify the token and extract the payload
    const decoded = jwt.verify(token, secretKey);

    // Attach the user ID to the request for further processing
    req.userId = decoded.id;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid or expired token' });
  }

}
