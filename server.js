// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config({ path: './config/.env' });

const app = express();
const port = process.env.PORT || 5000;

// Connecter à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware pour analyser le corps des requêtes JSON
app.use(express.json());

// Définir les routes
app.use('/api/users', require('./routes/userRoutes'));

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
