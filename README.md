# 📝 Mon Blog API - INF222

Ce projet est une API REST développée dans le cadre de l'UE **INF222 (Programmation Web)** à l'Université de Yaoundé I. Il permet de gérer un système de blog simplifié (Articles) en utilisant Node.js et SQLite.

## 🚀 Fonctionnalités
- **CRUD Complet** : Création, Lecture, Modification et Suppression d'articles.
- **Base de données** : SQLite gérée avec l'ORM Sequelize.
- **Documentation** : Interface interactive avec Swagger UI.

## 🛠️ Technologies utilisées
- **Backend** : Node.js & Express
- **Base de données** : SQLite3
- **ORM** : Sequelize
- **Documentation** : Swagger-jsdoc & Swagger-ui-express

## 📂 Structure du projet
```text
mon-blog-api/
├── config/         # Configuration de la base de données
├── controllers/    # Logique métier (fonctions CRUD)
├── models/         # Modèles Sequelize (Schéma Article)
├── routes/         # Définition des points de terminaison (endpoints)
├── server.js       # Point d'entrée de l'application
└── blog.db         # Fichier de base de données SQLite (auto-généré)# TP-INF222-mon-blog-api
