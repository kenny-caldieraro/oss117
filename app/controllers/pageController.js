const { Sequelize } = require('sequelize');
const Quotes = require('../models/quotes');
const seo = require('../seo');

// Films with their slug and number of quotes, oldest first.
async function listFilms() {
    const rows = await Quotes.findAll({
        attributes: ['film', [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']],
        group: ['film'],
        raw: true,
    });
    return rows
        .map((row) => ({
            name: row.film,
            shortName: seo.filmShortName(row.film),
            slug: seo.filmSlug(row.film),
            year: seo.filmYear(row.film),
            count: Number(row.count),
        }))
        .sort((a, b) => (a.year || 9999) - (b.year || 9999));
}

function withFilm(quote) {
    return {
        ...quote,
        filmSlug: seo.filmSlug(quote.film),
        filmShortName: seo.filmShortName(quote.film),
        filmYear: seo.filmYear(quote.film),
    };
}

const pageController = {
    async home(_, res) {
        const [quote, films] = await Promise.all([
            Quotes.findOne({ order: [Sequelize.fn('RAND')], raw: true }),
            listFilms(),
        ]);
        const total = films.reduce((sum, film) => sum + film.count, 0);

        res.render('index', {
            quote: quote && withFilm(quote),
            films,
            meta: seo.meta({
                title: "Répliques cultes d'OSS 117 et API gratuite — Le Caire, nid d'API",
                description: `Les ${total} meilleures répliques d'OSS 117 (Le Caire, Rio, Alerte rouge en Afrique noire) à lire, copier et partager, et une API JSON gratuite pour les utiliser partout.`,
                path: '/',
                jsonLd: {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: "OSS 117 — Le Caire, nid d'API",
                    url: seo.absoluteUrl('/'),
                    inLanguage: 'fr',
                },
            }),
        });
    },

    async quote(req, res, next) {
        const id = Number(req.params.id);
        if (!Number.isInteger(id) || id < 1) return next();

        const quote = await Quotes.findByPk(id, { raw: true });
        if (!quote) return next();

        const [previous, following] = await Promise.all([
            Quotes.findOne({ where: { id: { [Sequelize.Op.lt]: id } }, order: [['id', 'DESC']], attributes: ['id'], raw: true }),
            Quotes.findOne({ where: { id: { [Sequelize.Op.gt]: id } }, order: [['id', 'ASC']], attributes: ['id'], raw: true }),
        ]);
        const full = withFilm(quote);

        res.render('quote', {
            quote: full,
            previous,
            following,
            meta: seo.meta({
                title: `« ${seo.truncate(quote.content, 60)} » — Réplique OSS 117`,
                description: `« ${quote.content} » — ${quote.author}, ${quote.film}.`,
                path: `/replique/${quote.id}`,
                type: 'article',
                jsonLd: seo.quoteJsonLd(quote),
            }),
        });
    },

    async film(req, res, next) {
        const films = await listFilms();
        const film = films.find((item) => item.slug === req.params.slug);
        if (!film) return next();

        const quotes = await Quotes.findAll({ where: { film: film.name }, order: [['id', 'ASC']], raw: true });

        res.render('film', {
            film,
            films,
            quotes,
            meta: seo.meta({
                title: `Les ${film.count} répliques cultes de ${film.name}`,
                description: `Toutes les répliques cultes de ${film.name} : « ${seo.truncate(quotes[0].content, 90)} » et ${film.count - 1} autres, à lire et à partager.`,
                path: `/film/${film.slug}`,
                jsonLd: {
                    '@context': 'https://schema.org',
                    '@type': 'CollectionPage',
                    name: `Répliques de ${film.name}`,
                    url: seo.absoluteUrl(`/film/${film.slug}`),
                    about: { '@type': 'Movie', name: film.name },
                    hasPart: quotes.map(seo.quoteJsonLd),
                },
            }),
        });
    },

    async all(_, res) {
        const [films, quotes] = await Promise.all([
            listFilms(),
            Quotes.findAll({ order: [['id', 'ASC']], raw: true }),
        ]);
        const byFilm = films.map((film) => ({ ...film, quotes: quotes.filter((quote) => quote.film === film.name) }));

        res.render('all', {
            films: byFilm,
            meta: seo.meta({
                title: `Toutes les répliques d'OSS 117 (${quotes.length} citations)`,
                description: `Les ${quotes.length} répliques cultes d'Hubert Bonnisseur de la Bath et des autres personnages d'OSS 117, classées par film.`,
                path: '/repliques',
            }),
        });
    },

    robots(_, res) {
        res.type('text/plain').send(`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${seo.absoluteUrl('/sitemap.xml')}\n`);
    },

    async sitemap(_, res) {
        const [films, quotes] = await Promise.all([
            listFilms(),
            Quotes.findAll({ attributes: ['id'], order: [['id', 'ASC']], raw: true }),
        ]);
        const paths = ['/', '/repliques']
            .concat(films.map((film) => `/film/${film.slug}`))
            .concat(quotes.map((quote) => `/replique/${quote.id}`));
        const urls = paths.map((path) => `  <url><loc>${seo.absoluteUrl(path)}</loc></url>`).join('\n');

        res.type('application/xml').send(
            `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        );
    },
};

module.exports = pageController;
