const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/articleController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       required:
 *         - titre
 *         - contenu
 *         - auteur
 *       properties:
 *         titre:
 *           type: string
 *           example: Apprendre Node.js
 *         contenu:
 *           type: string
 *           example: Node.js est un environnement d'exécution JavaScript côté serveur. Elle permet de créer des applications web rapides et évolutives grâce à son modèle d'exécution non bloquant et orienté événements.
 *         auteur:
 *           type: string
 *           example: ange merveilles
 *         categorie:
 *           type: string
 *           example: Programmation
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example: ["node","api"]
 */

// POST
router.post('/articles', ctrl.createArticle);

// GET ALL
router.get('/articles', ctrl.getArticles);

// GET ID
router.get('/articles/:id', ctrl.getArticleById);

// PUT
router.put('/articles/:id', ctrl.updateArticle);

// DELETE
router.delete('/articles/:id', ctrl.deleteArticle);

// SEARCH
router.get('/articles/search', ctrl.searchArticles);

module.exports = router;