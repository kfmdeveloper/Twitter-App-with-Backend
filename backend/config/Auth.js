const jwt = require("jsonwebtoken");
const isAuthenticated = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not Authenticated! No Token Provided",
        success: false,
      });
    }
    const verified = jwt.verify(token, process.env.JSON_TOKEN);
    req.user = verified.UserId;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "User not Authenticated!",
      success: false,
    });
  }
};

module.exports = isAuthenticated;
