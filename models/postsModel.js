const mongoose = require ("mongoose");

const PostsModel = mongoose.model(
    "FirstNodeJsAPI",   //Dans quel BDD elle se trouve?
    {//Déclamer ce qu'il y'a l'intérieur
        author: {
            type : String,
            required: true, //Si ya pas d'auteur alors il va pas envoyer
        },
        message:{
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now, //A chaque fois quand il créera, elle prendre la date, l'heure de maintenant
        }
    },
    "posts" //Dans quel table elle va s''incorporer
    
);

module.exports={PostsModel}; //Exporter la table Posts partout