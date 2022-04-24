const Quotes = require("../models/quotes");
const { Sequelize } = require("sequelize");

const mainController = {
  error404(_, res) {
    res.status(404).render("404");
  },

  logUrl(req, _, next) {
    console.log(req.url);
    next();
  },

  mainUrl(_, res) {
    res.render("index", {});
  },

  async randomQuote(_, res) {
    try {
      const quote = await Quotes.findOne({
        order: [Sequelize.fn("RAND")],
      });
      res.json(quote);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  async quoteAll(_, res) {
    try {
      const quotes = await Quotes.findAll();
      res.json(quotes);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = mainController;
