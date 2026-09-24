const SITE_URL = (process.env.SITE_URL || 'https://oss117.click').replace(/\/$/, '');
const SITE_NAME = "OSS 117 — Le Caire, nid d'API";
const DEFAULT_IMAGE = '/images/og.jpg';

// "OSS 117 : Rio ne répond plus" -> "rio-ne-repond-plus"
function filmSlug(film) {
    return film
        .replace(/^OSS 117\s*:\s*/i, '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

// Release years, used to list the films in order.
const FILM_YEARS = {
    'le-caire-nid-d-espions': 2006,
    'rio-ne-repond-plus': 2009,
    'alerte-rouge-en-afrique-noire': 2021,
};

function filmYear(film) {
    return FILM_YEARS[filmSlug(film)] || null;
}

function filmShortName(film) {
    return film.replace(/^OSS 117\s*:\s*/i, '');
}

function truncate(text, max) {
    if (text.length <= max) return text;
    return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
}

function absoluteUrl(path) {
    return SITE_URL + path;
}

// Builds the values used by the <head> partial.
function meta({ title, description, path, image = DEFAULT_IMAGE, type = 'website', jsonLd = null }) {
    return {
        title,
        description: truncate(description, 160),
        canonical: absoluteUrl(path),
        image: absoluteUrl(image),
        type,
        siteName: SITE_NAME,
        // Escape "<" so the JSON can't close the <script> tag.
        jsonLd: jsonLd ? JSON.stringify(jsonLd).replace(/</g, '\\u003c') : null,
    };
}

function quoteJsonLd(quote) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Quotation',
        text: quote.content,
        url: absoluteUrl(`/replique/${quote.id}`),
        spokenByCharacter: { '@type': 'Person', name: quote.author },
        isPartOf: { '@type': 'Movie', name: quote.film },
        inLanguage: 'fr',
    };
}

module.exports = {
    SITE_URL,
    filmSlug,
    filmShortName,
    filmYear,
    truncate,
    absoluteUrl,
    meta,
    quoteJsonLd,
};
