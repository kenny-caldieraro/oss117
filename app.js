require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./app/router");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  }),
);

const multer = require("multer");
const bodyParser = multer();
app.use(bodyParser.none());

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
