const express = require("express");
const route = express.Router();
const User = require("../mongoose/models/users");

route.post("/register", async (req, res) => {
  const {  email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ status: 409, message: "User already exists" });
    }
    const newUser = new User({
      email,
      password,
    });
    await newUser.save();
    return res.json({ status: "201", message: "User created" });
  } catch (error) {
    return res.json({ status: "500", message: "Erreur serveur", error });
  }
});
module.exports = route;
