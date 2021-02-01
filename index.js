/*
================
== middleWare ==
================
Un middleWare est essentiellement une fonction qui reçoit des "object" 'Request' et 'Response' 
et comme troisième argument une autre fonction 'next()' que l'on appellera une fois le code middleWare terminé
*/


/*
== Exemple 1
// var express = require('express');
// var app = express();

// Dès lors qu'on envoie une requête, on reçoit une réponse !
// L'instruction ci-dessou  nous permet de retourner une réponse au client.
// '/' est la route (par défaut)

// app.get('/', function(req,res) {
//     res,send('Hello world');
// });

// app.listen(8080);
*/

/*
== Exemple 2
// var express = require('express');
// var app = express();

// var middleWare = function (req, res, next) {
//     console.log("middleWare01 : ", req.url );
//     next();
// };
// app.use(middleWare);

// app.get('/', function (req, res) {
//     console.log("requête reçu");
//     res.send('Hello World !');
// });

// app.listen(8080, function () {
//     console.log("Express en attente");
// });
*/

/*
== Exemple 3
// var express = require('express');
// var app = express();

// var middleWare01 = function (req, res, next) {
//     console.log("middleWare01 : ", req.url );
//     next();
// };
// var middleWare02 = function (req, res, next) {
//     console.log("middleWare02 : ", req.url );
// };
// app.get('/', function (req, res) {
//     console.log("requête reçu");
// 	res.send('Hello World !');
// 	next();
// }, middleWare01, middleWare02);

// app.listen(8080, function () {
//     console.log("Express en attente");
// });
*/
// Ici l'appel du 'app.get' remplace 'app.use' et on reçoit les requetes après et non pas avant comme dans l'exemple précédent
	
/*
== Exemple 4
// var express = require('express');
// var app = express();

// var myLogger = function (req, res, next) {
//     console.log("vous êtes loggé");
// 	next();
// }

// app.use(myLogger);

// app.get('/', (req, res) => {
// 	res.send('Hello World !');
// });
// app.get('/', function (req, res) {
// 	res.send('Hello World !');
// });

// app.listen(8080, function () {
//     console.log("Express en attente");
// });
*/

/*
== Exemple 5
// var express = require('express');
// var app = express();

// var requestTime = function (req, res, next) {
//     req.requestTime = Date(Date.now());
// 	next();
// }

// app.use(requestTime);

// app.get('/', (req, res) => {
// 	var responseText = "Hello World !";
// 	responseText += 'appellé à : ' + req.requestTime + '';
// 	res.send('Hello World !');
// });

// app.listen(8080, function () {
//     console.log("Express en attente");
// });
*/





var express = require('express');
var app = express();

// Appel du module router post.js
// var post = require('./routes/post');

// Appel du "module/middleWare Express" bodyParser 
var bodyParser = require('body-parser');

// Déclaration de Vues Embedded Javascript (EJS)
app.set('engine_view', 'ejs');

app.use(bodyParser.urlencoded({extended : false}));



let comments = [];
app.get('/commentaires', (req, res) => {
    res.render('commentaires.ejs', {
        comments
    });
});

app.post('/', (req, res) => {
    let comment = {
        auteur: req.body.auteur,
        email: req.body.email,
        title: req.body.title,
        comment: req.body.comment,
        date: new Date(Date.now())
    };
    comments.push(comment);
    res.render('commentaires.ejs', {
        comments
    });
});

app.listen(8080, function () {
    console.log("Express en attente");
});


// ************************************************
// ************************************************
// app.get('/commentaires', (req, res) => {
// 	var commentaires = [
// 		{auteur: req.body.auteur},
// 		{email: req.body.email},
// 		{comment: req.body.comment},
// 		{date: req.body.dateDuJour},
// 	];
// 	var commentairesTitle = 'Liste des commentaires';

// 	res.render('index.ejs', {
// 		commentairesTitle,
// 		commentaires
// 	})
// });


// app.get('/commentaires', (req, res) => {
// 	res.render('commentaires.ejs');
// });

// app.post('/', (req, res) => {
// 	var commentaires = [
// 		{auteur: req.body.auteur},
// 		{email: req.body.email},
// 		{comment: req.body.comment},
// 		{date: req.body.dateDuJour},
// 	];
// 	var commentairesTitle = 'Liste des commentaires';

// 	res.render('commentaires.ejs', {
// 		commentairesTitle,
// 		commentaires
// 	})
// });


// app.get('/commentaires', (req, res) => {
// 	res.render('commentaires.ejs');
// });

// app.post('/', (req, res) => {
// 	res.render('commentsPrez.ejs', {
// 		auteur: req.body.auteur,
// 		email: req.body.email,
// 		comment: req.body.comment,
// 		date: req.body.dateDuJour,
// 	});
// });
