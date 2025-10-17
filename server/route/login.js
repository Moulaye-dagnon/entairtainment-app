const express = require("express");
const route = express.Router();
const User = require("../mongoose/models/users");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const UserModel = require("../mongoose/models/users");

route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Email or Password not correct",
      });
    }
    // const password_verif = await bcrypt.compare(password, user.password);
    // if (!password_verif) {
    //   return res.status(403).json({
    //     message: "Email or Password not correct",
    //   });
    // }
    const payload = {
      id: user._id,
      email: user.email,
      createAt: user.createAt,
    };
    const refreshToken = jsonwebtoken.sign(
      { userId: user._id },
      (process.env.REFFRESS_SECRET_KEY = "MY_SECRET_KEY"),
      {
        expiresIn: "2d",
      }
    );
    const token = jsonwebtoken.sign(payload, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15m",
    });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Vous êtes connecté",
      user: payload,
      refreshToken,
    });
  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
});

route.post("/refresh", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return res.status(401).json({ message: "Refresh token est pas donne" });

  const user = await UserModel.findOne({ refreshToken: refreshToken });
  if (!user)
    return res.status(403).json({ message: "Refresh token est pas donne" });

  const tokenVerif = jsonwebtoken.verify(
    refreshToken,
    process.env.REFFRESS_SECRET_KEY
  );
  if (tokenVerif) {
    const payload = {
      id: user._id,
      email: user.email,
      createAt: user.createAt,
    };
    const token = jsonwebtoken.sign(payload, process.env.ACCESS_SECRET_KEY, {
      expiresIn: "15m",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 60 * 1000,
    });
    return res.status(200).json({
      message: "Le token est rafraichi",
      user: payload,
    });
  }
  return res
    .status(403)
    .json({ status: false, message: "le refresh token est invalide" });
});

module.exports = route;
