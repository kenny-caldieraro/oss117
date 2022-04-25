const app = {
  mainURL: "https://oss117.click/api/v1/",

  init: function () {
    app.handleClick();
  },

  handleClick: function () {
    document.getElementById("getQuote").addEventListener("click", function () {
      app.getQuote();
    });
  },

  getQuote: async function () {
    try {
      const response = await fetch(app.mainURL + "quote/random");
      const data = await response.json();
      app.viewQuote(data);
    } catch (error) {
      console.log(error);
    }
  },

  viewQuote: function (data) {
    console.log(data);
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");
    quote.textContent = `"${data.content}"`;
    author.textContent = "- " + data.author;
  },
};

document.addEventListener("DOMContentLoaded", app.init);
