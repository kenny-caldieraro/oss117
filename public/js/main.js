const app = {
  apiURL: "/api/v1/",
  currentQuote: null,

  init: function () {
    const getQuote = document.getElementById("getQuote");
    if (!getQuote) return;

    getQuote.addEventListener("click", app.getQuote);
    document.getElementById("copyQuote").addEventListener("click", app.copyQuote);
    document.querySelectorAll(".endpoint").forEach(function (button) {
      button.addEventListener("click", app.tryEndpoint);
    });

    app.getQuote();
  },

  getQuote: async function () {
    const dossier = document.querySelector(".dossier");
    dossier.classList.add("is-loading");
    try {
      const response = await fetch(app.apiURL + "quote/random");
      if (!response.ok) throw new Error(response.status);
      app.viewQuote(await response.json());
    } catch (error) {
      console.log(error);
      app.viewQuote({
        id: "404",
        content: "Je ne peux pas vous répondre, l'API ne répond plus.",
        author: "Le serveur",
        film: "",
      });
    } finally {
      dossier.classList.remove("is-loading");
    }
  },

  viewQuote: function (data) {
    app.currentQuote = data;
    document.getElementById("quoteId").textContent = String(data.id ?? 117).padStart(3, "0");
    document.getElementById("quote").textContent = data.content;
    document.getElementById("author").textContent = data.author;
    document.getElementById("film").textContent = data.film || "";
  },

  copyQuote: async function (event) {
    const button = event.currentTarget;
    const quote = app.currentQuote;
    if (!quote) return;
    try {
      await navigator.clipboard.writeText(`« ${quote.content} » — ${quote.author}, ${quote.film}`);
      button.textContent = "Copié !";
    } catch (error) {
      button.textContent = "Raté…";
    }
    setTimeout(function () {
      button.textContent = "Copier";
    }, 1500);
  },

  tryEndpoint: async function (event) {
    const button = event.currentTarget;
    const path = app.apiURL + button.dataset.path;
    const body = document.getElementById("consoleBody");

    document.querySelectorAll(".endpoint").forEach(function (item) {
      item.classList.toggle("is-active", item === button);
    });
    document.getElementById("consoleUrl").textContent = "GET " + path;
    body.textContent = "…";

    try {
      const response = await fetch(path);
      body.textContent = JSON.stringify(await response.json(), null, 2);
    } catch (error) {
      body.textContent = "Erreur : " + error.message;
    }
  },
};

document.addEventListener("DOMContentLoaded", app.init);
