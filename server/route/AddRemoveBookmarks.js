const router = require("express").Router();
const bookmarks = require("../mongoose/models/bookmarks");
router.post("/bookmarks", async (req, res) => {
  const { userID, movieID, type } = req.body;
  try {
    const bookmarkVerif = await bookmarks.findOne({
      userID: userID,
      movieID: movieID,
    });
    if (bookmarkVerif) {
      await bookmarks.deleteOne({ _id: bookmarkVerif._id });
      return res.status(204).json({ message: "bookmarks  deleted" });
    }
    const newbookmark = new bookmarks({
      userID: userID,
      movieID: movieID,
      type: type,
    });
    await newbookmark.save();
    return res.status(201).json({ message: "bookmarks created" });
  } catch (error) {
    console.log("Server error", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});


module.exports = router;
