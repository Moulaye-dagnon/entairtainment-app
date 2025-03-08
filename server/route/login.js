const express = require("express");
const route = express.Router();
const User = require("../mongoose/models/users");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        status: 401,
        message: "Email OR Password not correct",
      });
    }
    const password_verif = await bcrypt.compare(password, user.password);
    if (!password_verif) {
      return res.json({
        status: 401,
        message: "Email  Password not correct",
      });
    }
    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
      createAt: user.createAt,
    };

    const token = jsonwebtoken.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 720000 });
    return res.json({
      status: 200,
      message: "Vous etes connecte",
      user: payload,
    });
  } catch (error) {
    return res.json({ status: 500, message: "Erreur serveur" });
  }
});

module.exports = route;
