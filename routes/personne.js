var express = require('express');
var router = express.Router();

router.get('/search', function (req, res) {
	res, send('Recherche Personne');
});

router.get('/add', function (req, res) {
	res, send('Ajout Personne');
});

router.put('/edit', function (req, res) {
	res, send('Mise à jour Personne');
});

router.delete('/delete', function (req, res) {
	res, send('Suppression Personne');
});

module.exports = router;
// -> NE PAS OUBLIER de l'ajouter dans 'index.js' en insérant le code suivant 
// var personne = require('./routes/personne');
// app.use('/personne', personne);
