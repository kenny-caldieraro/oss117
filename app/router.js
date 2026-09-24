const express = require('express');
const mainController = require('./controllers/mainController');
const pageController = require('./controllers/pageController');
const router = express.Router();

// router.use(mainController.logUrl);

router.get('/', pageController.home);
router.get('/repliques', pageController.all);
router.get('/replique/:id', pageController.quote);
router.get('/film/:slug', pageController.film);
router.get('/robots.txt', pageController.robots);
router.get('/sitemap.xml', pageController.sitemap);

router.get('/api/v1/quote/random', mainController.randomQuote);
router.post('/api/v1/quote/slack_random', mainController.slackRandomQuote);
router.get('/api/v1/quote/all', mainController.quoteAll);
router.get('/api/v1/quote/coffee', mainController.easterEgg);
router.get('/api/v1/quote/:id', mainController.quoteId);
router.get('/api/v1/perso/:name', mainController.persoName);

router.use(mainController.error404);
router.use(mainController.error500);

module.exports = router;
