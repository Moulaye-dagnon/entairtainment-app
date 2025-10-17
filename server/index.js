require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
require("./mongoose/database.js");
const app = express();
const register = require("./route/register.js");
const login = require("./route/login.js");
const logout = require("./route/logout.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const trending = require("./route/trending.js");
const Nottrending = require("./route/NotTrending.js");
const movies = require("./route/Movie.js");
const tv = require("./route/tv.js");
const search = require("./route/Search.js");
const bookmarks = require("./route/AddRemoveBookmarks.js");
const bookmarkByCategory = require("./route/GetAllbookmarks.js");
const VerifToken = require("./VerifToken.js");

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);
app.use(cookieParser());
app.use("/auth", register);
app.use("/auth", login);
app.use("/auth", logout);
app.use("/", trending);
app.use("/", Nottrending);
app.use("/", movies);
app.use("/", tv);
app.use("/", search);
app.use("/", bookmarks);
app.use("/", bookmarkByCategory);
app.listen(port, (req, res) => {
  console.log("server connected ");
});
