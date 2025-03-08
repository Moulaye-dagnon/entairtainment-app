require("dotenv").config();
const express = require("express");
const port = process.env.PORT;
require("./mongoose/database.js");
const app = express();
const register = require("./route/register.js");
const login = require("./route/login.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const movies = require("./route/Movie.js");
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
app.use("/", movies);
app.listen(port, (req, res) => {
  console.log("server connected ");
});
