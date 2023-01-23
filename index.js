const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//Se connecter au routeur
app.use('/posts'/*Si jamais le chemin c'est juste '/' alors tu nous envoie en paramètre :*/ , postsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));