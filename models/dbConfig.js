const mongoose = require('mongoose') //Il connait tout les méthodes de mongoose

mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb://127.0.0.1:27017/FirstNodeJsAPI", //On a remplacé localhost par l'adreese ip de l'host car il le prend pas
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err){
            console.log("Mongodb connected"); 
        } else {
            console.log("Connection error: " + err);
    }
}
    )