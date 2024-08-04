import jwt from 'jsonwebtoken'

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Access denied, no token provided'
    })
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({
      status: 'error',
      message: 'Invalid token'
    })
  }
}