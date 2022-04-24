-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : dim. 24 avr. 2022 à 15:40
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `oss117`
--

-- --------------------------------------------------------

--
-- Structure de la table `quotes`
--

DROP TABLE IF EXISTS `quotes`;
CREATE TABLE IF NOT EXISTS `quotes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `film` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `quotes`
--

INSERT INTO `quotes` (`id`, `content`, `author`, `film`) VALUES
(1, 'Je ne vois pas trop l’intérêt de ressembler à une femme.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(2, 'Oh pardon, je suis affreusement maladroite, apparemment je vous ai... éclaboussé.', 'Carlotta', 'OSS 117 : Rio ne répond plus'),
(3, 'On me dit le plus grand bien des harengs pommes à l’huile ?', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(4, 'Faudrait vraiment arrêter avec les noms d’animaux... A force c’est vexant !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(5, 'En tout cas, on peut dire que le Soviet éponge !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(6, 'Le IIIe reich et l’ideologie nazie m’ont toujours rendu dubitatif.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(7, 'C\'est notre Raïs à nous : c\'est monsieur René Coty. Un grand homme. Il marquera l\'Histoire. Il aime les Cochinchinois, les Malgaches, les Marocains, les Sénégalais… c\'est donc ton ami. Ce sera ton porte-bonheur.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(8, 'Bien, mais dépêchons-nous, je n’ai que quelques heures.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(9, 'Comment est votre blanquette ?', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(10, 'J\'aime le bruit blanc de l\'eau.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(11, 'Ça fait un peu Jacadi a dit : « Pas de charcuterie ! »', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(12, 'Une dictature, comme vous y allez ! Vous êtes bien sympathique, Dolorès, mais épargnez-moi vos analyses politiques… (Temps.) Savez-vous seulement ce que c\'est qu\'une dictature ? (Temps.) Une dictature c\'est quand les gens sont communistes, déjà. Qu\'ils ont froid, avec des chapeaux gris et des chaussures à fermeture éclair. C\'est ça, une dictature, Dolorès.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(13, 'Avec moi, les histoires d’amour ne s’écrivent pas dans le temps, ce sont des histoires courtes, compactes, passionnelles. Je ne peux pas vivre autrement Dolorès. D’aucuns ont des aventures… Je suis une aventure.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(14, 'J\'aime quand une jolie femme brune m\'apporte mon petit déjeuner au lit.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(15, 'C’est là que l’on voit la grandeur de votre civilisation. Construire pareil ouvrage il y a 4000 ans il fallait être visionnaire !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(16, 'Comment s’appelle cette guitare en forme de gros tourteau fromager ?', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(17, 'J\'aime me beurrer la biscotte.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(18, 'Tu n\'es pas seulement un lâche, tu es un traitre... comme ta petite taille le laissait deviner !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(19, 'Un nazi n\'a-t-il pas des yeux ? Un nazi n\'a-t-il pas des mains, des organes, des dimensions, des sens, de l’affection, de la passion ; nourri avec la même nourriture, blessé par les mêmes armes, exposé aux mêmes maladies, soigné de la même façon, dans la chaleur et le froid du même hiver et du même été que les Chrétiens ? Si vous nous piquez, ne saignons-nous pas ? Si vous nous chatouillez, ne rions-nous pas ? Si vous nous empoisonnez, ne mourrons-nous pas ?', 'Von Zimmel', 'OSS 117 : Rio ne répond plus'),
(20, 'Ça suffit Loktar, tu te tais ou je te tais !', 'Gerhard Moeller', 'OSS 117 : Le Caire, nid d\'espions'),
(21, 'Et non pas le gratin de pommes de terre ! (Larmina le regarde) Nan, parce que ça ressemble à carotte, Cairote. Le... Le légume, puisque vous avez dit gratin... Gratin de pommes de terre... C’est, c’est une astuce...', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(22, 'Bla bla bla bla bla... C\'est marrant, c\'est toujours les nazis qui ont toujours le mauvais rôle... Nous sommes en 1955, Herr Bramard ! On peut avoir une deuxième chance ?! Merci...', 'Gerhard Moeller', 'OSS 117 : Le Caire, nid d\'espions'),
(23, 'Pour rencontrer M. Li, il vaut mieux avoir une bonne couverture, sinon, je serai dans de beaux draps.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(24, 'Pourchasser un nazi avec des juifs ? Quelle drôle d’idée !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(25, 'Bon, écoutez mon p\'tit. Heu. J\'ai fait mon boulot, moi. J\'ai redressé l\'avion, j\'vous ai sauvé la vie. Là, je viens de tuer un croco. Alors si vous vous voulez qu\'on travaille d\'égal à égal, faudrait vous y mettre : vous pourriez au moins vous occuper du manger.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(26, 'J\'aime me battre.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(27, 'J’ai été réveillé par un homme qui hurlait à la mort du haut de cette tour ! J’ai dû le faire taire.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(28, 'Vous avez bien une amicale des anciens nazis ? un club ? une association peut-être ?', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(29, '23-0 ! C\'est la piquette Jack !!! Tu sais pas jouer, Jack ! T\'es mauvais hahahahaha !!!', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(30, 'J\'aime quand on m\'enduit d\'huile.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(31, 'OSS 117, pour vous servir !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(32, 'Ah ah bravo Bill, en plein dans l\'dos !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(33, 'Ah ! C’était donc ça tout ce tintouin.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(34, 'Jolie voiture ! Dommage qu’elle soit si sale !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(35, 'Non, il jouait au jokari avec un ami, l’élastique s’est distendu, la balle est partie... il l’a suivie emporté par les flots...', 'Larmina El Akmar Betouche', 'OSS 117 : Le Caire, nid d\'espions'),
(36, 'Pas le moins du monde, il aura fait une erreur sur la personne voilà tout... N\'oublions pas que de son point de vue nous nous ressemblons tous !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(37, 'La famille royale est peut-être dégénérée mais j\'peux vous assurer que la princesse Al Tarouk vaut le détour. J\'peux vous dire que quand elle s\'affaire elle laisse son sang royal au vestiaire ! Mais elle gueule mon vieux ! On dirait une poissonnière de Ménilmontant !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(38, 'Ah ! J\'ai fait de l\'humour juif, je crois que c\'est quand ce n\'est pas rigolo et que ça ne parle pas de saucisses.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(39, 'Ma foi, comme un lundi, frais dans la matinée, soleil dans l\'après midi, la recette des sports d\'hiver réussis!', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(40, 'On est en 1955 les gars, faut se réveiller. Les ânes partout, les djellabas, l’écriture illisible, ça va hein ! S’agirait de grandir ! S’agirait de grandir...Moi j’suis dans le poulet, eh ben j’vois rien que dans le poulet c’est un bordel !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(41, 'J\'aime les panoramas.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(42, 'Je n\'y suis pour rien. C\'est l\'inexpugnable arrogance de votre beauté qui m\'asperge.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(43, 'Shut up ! Kiss my ass !', 'Bill Tremendous', 'OSS 117 : Rio ne répond plus'),
(44, 'Vous voulez terminer comme ces poulets ? Vous voulez mourir Bramard ? Décapité, vidé, plumé, c’est ça qu’vous voulez ?', 'Raymond Pelletier', 'OSS 117 : Le Caire, nid d\'espions'),
(45, 'Mais je vous en prie. D\'ailleurs, ne dit-on pas qu\'une femme qui éclabousse un homme, c\'est un peu comme la rosée d\'une matinée de printemps. C\'est la promesse d\'une belle journée et la perspective d\'une soirée enflammée.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(46, 'Ne pas fumer me tue.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(47, 'J\'ai décidé d\'appeler cela.... des enregistroscopes ! Le temps que les écrans chauffent...', 'Gerhard Moeller', 'OSS 117 : Le Caire, nid d\'espions'),
(48, 'Mais, me juger de quoi ? Je vais ni faire à manger, ni faire une petite table. Parce qu\'on juge une femme sur sa cuisine, c\'est ça ?', 'Dolorès', 'OSS 117 : Rio ne répond plus'),
(49, 'Chou blanc donc...', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus'),
(50, 'Des millions ?! Haha, des millions ! Vous êtes charmante mais vous voyez déjà ce que ça fait un million Larmina ?', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(51, 'Vous voyez l\'automobile derrière moi ? Ça fait un petit moment que je l\'observe.. elle est absolument impeccable.. C\'est quand même bien mieux une voiture propre, non ? À l\'occasion, je vous mettrai un petit coup de polish.', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Le Caire, nid d\'espions'),
(52, 'Voilà Dolorès, cadeau ... de Noël ! Non je dis Noël, c\'est par rapport à mon prénom. Sinon il y ... il y a aussi les boules... Oh si, ça c\'est rigolo ! Il faut absolument que j\'appelle Armand !', 'Hubert Bonnisseur de la Bath (alias OSS 117)', 'OSS 117 : Rio ne répond plus');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
