const express = require('express');
const sequelize = require('./config/database');
const articleRoutes = require('./routes/articleRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

// Configuration de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Mon Blog API - INF222',
      version: '1.0.0',
      description: 'API pour la gestion des articles de blog',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./routes/*.js'], // Où chercher les annotations pour la doc
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/articles', articleRoutes);

const PORT = 3000;
sequelize.sync().then(() => {
  console.log('Base de données synchronisée !');
  console.log(`Swagger disponible sur http://localhost:${PORT}/api-docs`);
  app.listen(PORT, () => {
    console.log(`Le serveur tourne sur http://localhost:${PORT}`);
  });
});