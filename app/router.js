const express = require('express');
const mainController = require('./controllers/mainController');
const router = express.Router();

// router.use(mainController.logUrl);

router.get('/', mainController.mainUrl);

router.get('/api/v1/quote/random', mainController.randomQuote);
router.get('/api/v1/quote/slack_random', mainController.slackRandomQuote);
router.get('/api/v1/quote/all', mainController.quoteAll);
router.get('/api/v1/quote/:id', mainController.quoteId);
router.get('/api/v1/perso/:name', mainController.persoName);
router.get('/api/v1/quote/coffee', mainController.easterEgg);

router.use(mainController.error404);

module.exports = router;
