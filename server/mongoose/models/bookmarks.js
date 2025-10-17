const mongoose = require("mongoose");

const schemaType = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  movieID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "movie",
    required: true,
  },
  type: { type: String, required: true },
});

const bookmarkModel = mongoose.model("bookmark", schemaType);

module.exports = bookmarkModel;
