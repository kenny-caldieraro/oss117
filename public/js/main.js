const app = {
  apiURL: "/api/v1/",

  init: function () {
    const getQuote = document.getElementById("getQuote");
    if (getQuote) getQuote.addEventListener("click", app.getQuote);

    const copyQuote = document.getElementById("copyQuote");
    if (copyQuote) copyQuote.addEventListener("click", app.copyQuote);

    document.querySelectorAll(".endpoint").forEach(function (button) {
      button.addEventListener("click", app.tryEndpoint);
    });
  },

  // Same rule as filmSlug() in app/seo.js.
  filmSlug: function (film) {
    return film
      .replace(/^OSS 117\s*:\s*/i, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
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
    const id = document.getElementById("quoteId");
    const film = document.getElementById("film");

    id.textContent = String(data.id ?? 117).padStart(3, "0");
    id.href = data.film ? "/replique/" + data.id : "/repliques";
    document.getElementById("quote").textContent = data.content;
    document.getElementById("author").textContent = data.author;

    film.textContent = "";
    if (data.film) {
      const link = document.createElement("a");
      link.href = "/film/" + app.filmSlug(data.film);
      link.textContent = data.film;
      film.appendChild(link);
    }
  },

  copyQuote: async function (event) {
    const button = event.currentTarget;
    const text = (id) => document.getElementById(id).textContent.trim();
    try {
      await navigator.clipboard.writeText(`« ${text("quote")} » — ${text("author")}, ${text("film")}`);
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
