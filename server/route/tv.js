const route = require("express").Router();
const Movie = require("../mongoose/models/movies");

route.get("/tv", async (req, res) => {
  try {
    const Data = await Movie.find({ category: "TV Series" });
    if (Data) {
      return res.status(200).json({ data: Data });
    }
  } catch (error) {
    console.log("Error server", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = route;
