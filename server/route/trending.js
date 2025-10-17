const route = require("express").Router();
const Movie = require("../mongoose/models/movies");

route.get("/trending", async (req, res) => {
  try {
    const Data = await Movie.find({ isTrending: true });
    if (Data) {
      return res.status(200).json({ data: Data });
    }
  } catch (error) {
    console.log("Error server", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = route;
