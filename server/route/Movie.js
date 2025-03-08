const route = require("express").Router();
const Movie = require("../mongoose/models/movies");

route.get("/trending", async (req, res) => {
  try {
    const Data = await Movie.find({ isTrending: true });
    if (Data) {
      return res.json({ status: 200, data: Data });
    }
  } catch (error) {
    console.log("Error server", error);
    return res.json({ status: 500, error: "Internal Server Error" });
  }
});

module.exports = route;
