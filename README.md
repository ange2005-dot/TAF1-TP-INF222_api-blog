API-BLOG - TAF1 INF222 EC1

API REST complète pour la gestion d'un blog développé dans le cadre du TAF1 - INF222 (Développement Backend : Programmation Web).

Description

Cette API permet de gérer un blog avec des fonctionnalités CRUD complètes pour les articles. Chaque article contient un titre, un contenu, un auteur, une date, une catégorie et des tags.

Technologies Utilisées

Node.js : Environnement d'exécution JavaScript
Express : Framework web pour Node.js
Mongo DB : Base de données relationnelle 
Swagger : Documentation interactive de l'API.
Création du projet 
     . créer le dossier 
J’ai créé un dossier dans mon terminal avec : mkdir api-blog
          cd api-blog 
     . Initialiser Node.js
Entrer la commande nom init -y
     . Installer les dépendances 
Comme j'ai utilisé la base de données mongo db et j’ai utilisé swagger-ui pour tester j’entre dans mon terminal :  nom install express mongod swagger-ui-express swagger-jsdoc
NB: puisque je n’avais pas encore Mongo DB,je suis allée l’installer sur le site officiel Mongo DB Community server. J’ai donc pu poursuivre l’installation complète de mes dépendances.

npm (Node Package Manager)
Installation
      . Cloner le dépôt
git clone <https://github.com/ange2005-dot/TAF1-TP-INF222_api-blog.git>
cd api-blog 
        . Lancer l'application
Entrer dans le terminal node app.js le serveur renvoie application lancé sur 
http://localhost:3000 et
http://localhost:3000/api-docs 


Structure du Projet
Donc mon projet est structuré comme suit 
Documentation du projet
   .Documentation API
Une fois le serveur lancé, accédez à la documentation interactive Swagger :

URL : http://localhost:3000/api-docs

Vous pouvez également télécharger la spécification Swagger au format JSON :

URL : http://localhost:3000/swagger.json

     .Endpoints Disponibles

1. Créer un article

Endpoint : POST /api/articles

Description : Crée un nouvel article de blog

Body (JSON) :

{
  "titre": "Introduction au Node.js",
  "contenu": "Node.js est un environnement d'exécution JavaScript côté serveur...",
  "auteur": "ange merveilles",
  "date": "2026-03-22",
  "categorie": "Technologie",
  "tags": ["nodejs", "backend", "javascript"]
}
Réponse (201 Created) :

{
  "success": true,
  "message": "Article créé avec succès",
  "data": {
    "id": 1,
    "titre": "Introduction au Node.js",
    "contenu": "Node.js est un environnement d'exécution JavaScript côté serveur...",
    "auteur": "ange merveilles",
    "date": "2026-03-22",
    "categorie": "Technologie",
    "tags": ["nodejs", "backend", "javascript"]
  }
}
2. Récupérer tous les articles

Endpoint : GET /api/articles

Description : Récupère la liste de tous les articles avec possibilité de filtrer

Paramètres de requête (optionnels) :

catégorie : Filtrer par catégorie
auteur : Filtrer par auteur
date : Filtrer par date (format YYYY-MM-DD)
Exemples :

GET /api/articles
GET /api/articles?catégorie=Technologie
GET /api/articles?auteur=Charles
GET /api/articles?catégorie=Technologie Date=2026-03-18
Réponse (200 OK) :

{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "titre": "Introduction au Node.js",
      "contenu": "...",
      "auteur": "Charles",
      "date": "2026-03-18",
      "categorie": "Technologie",
      "tags": ["nodejs", "backend"],
      "created_at": "2026-03-18T10:30:00Z",
      "updated_at": "2026-03-18T10:30:00Z"
    }
  ]
}
3. Récupérer un article par ID

Endpoint : GET /api/articles/:id

Description : Récupère les détails d'un article spécifique

Exemple :

GET /api/articles/1
Réponse (200 OK) :

{
  "success": true,
  "data": {
    "id": 1,
    "titre": "Introduction au Node.js",
    "contenu": "...",
    "auteur": "Charles",
    "date": "2026-03-18",
    "categorie": "Technologie",
    "tags": ["nodejs", "backend"],
    "created_at": "2026-03-18T10:30:00Z",
    "updated_at": "2026-03-18T10:30:00Z"
  }
}
Réponse (404 Not Found) :

{
  "success": false,
  "message": "Article non trouvé"
}
4. Mettre à jour un article

Endpoint : PUT /api/articles/:id

Description : Modifier les informations d'un article existant

Body (JSON) :

{
  "titre": "Introduction avancée au Node.js",
  "contenu": "Node.js est un environnement performant...",
  "auteur": "Charles",
  "date": "2026-03-19",
  "catégorie": "Développement",
  "tags": ["nodejs", "backend", "avancé"]
}
Réponse (200 OK) :

{
  "success": true,
  "message": "Article mis à jour avec succès",
  "data": {
    "id": 1,
    "titre": "Introduction avancée au Node.js",
    "contenu": "...",
    "auteur": "ange merveilles",
    "date": "2026-03-23",
    "catégorie": "Développement",
    "tags": ["nodejs", "backend", "avancé"],
    "created_at": "2026-03-22T10:30:00Z",
    "updated_at": "2026-03-2€T14:20:00Z"
  }
}
5. Supprimer un article

Endpoint : DELETE /api/articles/:id

Description : Supprime un article de la base de données

Exemple :

DELETE /api/articles/1
Réponse (200 OK) :

{
  "success": true,
  "message": "Article supprimé avec succès",
  "data": {
    "deleted": true,
    "id": 1
  }
}
6. Rechercher des articles

Endpoint : GET /api/articles/search?query=texte

Description : Recherche des articles dont le titre ou le contenu contient le texte spécifié

Exemple :

GET /api/articles/search?query=Node.js
Réponse (200 OK) :

{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "titre": "Introduction au Node.js",
      "contenu": "...",
      "auteur": "ange merveilles",
      "date": "2026-03-22",
      "categorie": "Technologie",
      "tags": ["nodejs", "backend"]
    }
  ]
}
Codes de Statut HTTP
Code	Description
200	Requête réussie (OK)
201	Ressource créée avec succès (Created)
400	Requête mal formée (Bad Request)
404	Ressource non trouvée (Not Found)
500	Erreur interne du serveur (Internal Server Error)
Validation des Données
L'API utilise express-validator pour valider toutes les données entrantes :

Règles de validation pour la création d'article :
titre : obligatoire, entre 3 et 200 caractères
contenu : obligatoire, minimum 10 caractères
auteur : obligatoire, entre 2 et 100 caractères
date : obligatoire, format YYYY-MM-DD
catégorie : obligatoire, entre 2 et 50 caractères
tags : optionnel, tableau de chaînes ou chaîne de caractères
Exemples d'Utilisation
Avec cURL
Créer un article
curl -X POST http://localhost:3000/api/articles \
  -H "Content-Type: application/json" \
  -d '{
    "titre": "Mon premier article",
    "contenu": "Ceci est le contenu de mon premier article de blog.",
    "auteur": "Jean Dupont",
    "date": "2026-03-18",
    "catégorie": "Général",
    "tags": ["premier", "test"]
  }'
Récupérer tous les articles
curl http://localhost:3000/api/articles
Récupérer un article spécifique
curl http://localhost:3000/api/articles/1
Rechercher des articles
curl "http://localhost:3000/api/articles/search?query=Node.js"
Avec JavaScript (Fetch API)
// Créer un article
fetch('http://localhost:3000/api/articles', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    titre: "Mon article",
    contenu: "Contenu de l'article...",
    auteur: "Jean",
    date: "2026-03-18",
    catégorie: "Tech",
    tags: ["nodejs", "api"]
  })
})
  .then(response => response.json())
  .then(data => console.log(data));

// Récupérer tous les articles
fetch('http://localhost:3000/api/articles')
  .then(response => response.json())
  .then(data => console.log(data));
ANNEXES

Tests

Pour tester l'API, vous pouvez utiliser :
Swagger UI : http://localhost:3000/api-docs 

Navigateur : Pour les requêtes GET uniquement.

Dépôt GitHub

Le code source complet est disponible sur GitHub 
URL : https://github.com/ange2005-dot/TAF1-TP-INF222_api-blog

Auteur

Abatsong Ange Merveilles 

Licence

MIT License
