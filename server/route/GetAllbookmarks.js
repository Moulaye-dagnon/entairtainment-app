const allbookmarksByCategory = require("../utils/FunctionGetBookmarksByCategory");

const router = require("express").Router();

router.post("/bookmarks/:userId", async (req, res) => {
  const userId = req.params.userId;
  if (!userId) {
    return res.status(400).send("Bad Request: userId is missing");
  }
  console.log(userId);
  try {
    const bookmarks = await allbookmarksByCategory(userId);
    res.status(200).json({ data: bookmarks });
  } catch (error) {
    console.error("Error fetching bookmarks by userId:", error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
