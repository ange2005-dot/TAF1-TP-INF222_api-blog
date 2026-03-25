const Article = require(' ../models/Article ');

// CREATE
exports.createArticle = async (req, res) => {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
exports.getArticles = async (req, res) => {
  const articles = await Article.find();
  res.status(200).json(articles);
};

// GET BY ID
exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  res.json(article);
};

// UPDATE
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!article) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    res.json(article);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteArticle = async (req, res) => {
  await Article.findByIdAndDelete(req.params.id);
  res.json({ message: "Article supprimé" });
};

// SEARCH 🔍
exports.searchArticles = async (req, res) => {
  const query = req.query.query;

  const articles = await Article.find({
    $or: [
      { titre: { $regex: query, $options: 'i' } },
      { contenu: { $regex: query, $options: 'i' } }
    ]
  });

  res.json(articles);
};