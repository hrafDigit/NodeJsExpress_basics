var express = require('express');
var router = express.Router();

router.get('/search', function (req, res) {
	res, send('Recherche Adresse');
});

router.get('/add', function (req, res) {
	res, send('Ajout Adresse');
});

router.put('/edit', function (req, res) {
	res, send('Mise à jour Adresse');
});

router.delete('/delete', function (req, res) {
	res, send('Suppression Adresse');
});

module.exports = router;
// -> NE PAS OUBLIER de l'ajouter dans 'index.js' en insérant le code suivant 
// var adresse = require('./routes/adresse');
// app.use('/adresse', adresse);
