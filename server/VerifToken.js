const jwt = require("jsonwebtoken");

const verify_user = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "pas de token fourni" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ status: false, message: "l'authentification a failli" });
  }
};

module.exports = verify_user;
