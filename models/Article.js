const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  contenu: { type: String, required: true },
  auteur: { type: String, required: true },
  date: { type: Date, default: Date.now },
  categorie: String,
  tags: [String]
});

module.exports = mongoose.model('Article', articleSchema);