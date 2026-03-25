const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
app.use(express.json());

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/blog')
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.log(err));

// Routes
const articleRoutes = require('./routes/articleRoutes');
app.use('/api', articleRoutes);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Lancement
app.listen(3000, () => {
  console.log('Serveur lancé sur http://localhost:3000');
});