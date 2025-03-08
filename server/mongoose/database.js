const mongoose = require("mongoose");

module.exports = mongoose
  .connect("mongodb://localhost:27017/entertainment-web-app")
  .then(() => console.log("mongodb Connected!"))
  .catch((e) => console.log("e"));
