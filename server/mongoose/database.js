const mongoose = require("mongoose");

module.exports = mongoose
  .connect(
    "mongodb+srv://moulayedagnon_db_user:moul%409460@cluster-1.7c0u04v.mongodb.net/entertainment-app"
  )
  .then(() => console.log("mongodb Connected!"))
  .catch((e) => console.log(e));
