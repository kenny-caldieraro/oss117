require("dotenv").config({ quiet: true });
const compression = require("compression");
const cors = require("cors");
const express = require("express");
const app = express();
const router = require("./app/router");
const PORT = process.env.PORT || 3000;

app.disable("x-powered-by");
app.use(compression());

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
// CSS and JS links carry ?v=<start time>, so a restart busts the cache.
app.locals.assetVersion = Date.now().toString(36);
app.locals.truncate = require("./app/seo").truncate;
app.use(express.static("public", { maxAge: "30d" }));
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
