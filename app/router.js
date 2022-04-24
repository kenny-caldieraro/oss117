const express = require("express");
const mainController = require("./controllers/mainController");
const router = express.Router();

// router.use(mainController.logUrl);

router.get("/", mainController.mainUrl);

router.get("/api/v1/quote/random", mainController.randomQuote);
router.get("/api/v1/quote/all", mainController.quoteAll);

router.use(mainController.error404);

module.exports = router;
