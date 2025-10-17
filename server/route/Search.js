const route = require("express").Router();
const Movie = require("../mongoose/models/movies");

route.post("/search/:search", async (req, res) => {
  try {
    const { search } = req.params;

    if (!search || typeof search !== "string") {
      return res.status(100).json({
        message: "Search doit être une chaîne de caractères.",
      });
    }

    const Data = await Movie.find({
      title: { $regex: search, $options: "i" },
    });

    if (Data.length > 0) {
      return res.status(200).json({ data: Data });
    } else {
      return res.status(404).json({ message: "Aucun film trouvé." });
    }
  } catch (error) {
    console.log("Erreur serveur", error);
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

module.exports = route;
