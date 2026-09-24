-- Ajoute les répliques de « OSS 117 : Alerte rouge en Afrique noire » (2021).
-- Sans risque à relancer : ne fait rien si le film est déjà en base.
-- Usage : mysql -u <user> -p <database> < data/add-alerte-rouge.sql

SET NAMES utf8mb4;

INSERT INTO `quotes` (`content`, `author`, `film`)
SELECT * FROM (
SELECT 'Je vous répondrais « Oui », ce serait de la prétention ; je vous répondrais « Non », ce serait de la bêtise.' AS content, 'Hubert Bonnisseur de la Bath (alias OSS 117)' AS author, 'OSS 117 : Alerte rouge en Afrique noire' AS film
UNION ALL SELECT 'Mais qu\'est-ce que c\'est que ces préjugés !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'Attention, je n\'ai rien contre la modernité ; mais ça ne marche pas.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'En ce moment, ils voient du racisme partout.', 'Armand Lesignac', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'J\'en étais sûr. On ne parle jamais allemand par plaisir.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'Parfait ! Le temps d\'enfiler mon costume colonial… blanc... clair ! Mon costume clair…', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'L\'indépendance. Oui… on m\'a dit ça.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'Il y a quand même un hic et un hic de taille. Vous êtes une femme et une femme présidente… Je suis agent secret. Pas nourrice.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'Désolé, je crois que c\'est mon taxi.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
UNION ALL SELECT 'Chaque espèce, la plus dangereuse soit-elle, a son prédateur. Je suis leur prédateur.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Alerte rouge en Afrique noire'
) AS new_quotes
WHERE NOT EXISTS (SELECT 1 FROM `quotes` WHERE `film` = 'OSS 117 : Alerte rouge en Afrique noire');
