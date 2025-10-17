const express = require("express");
const route = express.Router();
const User = require("../mongoose/models/users");

route.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: "Erreur serveur", error });
  }
});
module.exports = route;
