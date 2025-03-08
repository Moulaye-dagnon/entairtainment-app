const mongoose = require("mongoose");
const SchemaModel = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  thumbnail: { type: Object, required: true },
  year: { type: Number, required: true },
  category: { type: String, required: true },
  rating: { type: String, required: true },
  isBookmarked: { type: Boolean, required: true },
  isTrending: { type: Boolean, required: true },
});

const movieModel = mongoose.model("movie", SchemaModel);
module.exports = movieModel;
