const express = require("express");
const route = express.Router();
const User = require("../mongoose/models/users");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const UserModel = require("../mongoose/models/users");

route.post("logout", async (req, res) => {
  const { userId } = req.body;
  const user = await UserModel.findById({ userId });
  if (user) {
    user.refreshToken = null;
    await user.save();
  }
  res.clearCookie("token");
  res.json({ message: "Deconnection reussie" });
});

module.exports = route;
