import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ success: false, message: "No token provided" });
  }

  try {
    // Do not fall back to an in-source secret. Require JWT_SECRET to be set in environment.
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.json({
        success: false,
        message: "Server misconfiguration: JWT_SECRET not set",
      });
    }
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};

export default auth;
