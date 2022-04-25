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

  async quoteId(req, res) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Bad request" });
    }
    try {
      const quote = await Quotes.findOne({
        where: { id: id },
      });
      res.json(quote);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },

  async persoName(req, res) {
    const name = req.params.name;
    if (!name) {
      return res.status(400).json({ error: "Bad request" });
    }
    try {
      const quote = await Quotes.findOne({
        where: { id: 29 },
      });
      const perso = quote.content.split("Jack").join(name);
      res.json({ perso });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = mainController;
