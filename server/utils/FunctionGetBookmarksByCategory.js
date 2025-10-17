const { default: mongoose } = require("mongoose");
const bookmarks = require("../mongoose/models/bookmarks");
const allbookmarksByCategory = async (userId) => {
  try {
    const all = await bookmarks.aggregate([
      {
        $lookup: {
          from: "movies",
          localField: "movieID",
          foreignField: "_id",
          as: "movies",
        },
      },
      {
        $unwind: "$movies",
      },

      {
        $match: {
          userID: new mongoose.Types.ObjectId(userId),
        },
      },
        {
          $project: {
            userID: 0,
            movieID: 0,
            __v: 0,
          },
        },
    ]);
    return all;
  } catch (error) {
    console.error("Error fetching bookmarks by category:", error);
    throw error;
  }
};

module.exports = allbookmarksByCategory;
