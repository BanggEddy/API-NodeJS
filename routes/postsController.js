const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose');

const { PostsModel } = require('../models/postsModel'); //On va chercher notre Posts dans Modèle

//Notre routeur est accessible partout dans le projet
router.get('/', (req, res) => { //Il va find le docs, (il c'est que c'est Posts)
    PostsModel.find((err, docs) => {
        if(!err){
            res.send(docs);
        } else {
            console.log("Error to get data in routeur : "+ err);
        }
    })
});

//.add = ajouter
//Form add on Postman
router.post('/', (req, res) => {
    console.log(req.body);
    const newRecord = new PostsModel({
        author : req.body.author,//Add the author from form
        message: req.body.message,//Add the message from form
    });
    
    newRecord.save((err, docs)=> {
        if (!err) { //If the req work:
            res.send(docs) 
        }
        else { //If he don't work well:
            console.log('Error creating new data: '+ err);
        } 
    });
});

//.put = modifier et va chercher selon l'id
//Update form 
router.put("/:id", (req, res) => {
    if(!ObjectID.isValidObjectId/*Récupére l'id de l'objet*/(req.params.id)) {
        return res.status(400).send("ID unknow :" + req.params.id)
    }
    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    }
    //Mettre à jour la BDD
    PostsModel.findByIdAndUpdate (
        req.params.id,
        { $set: updateRecord },
        { new: true },
        (err,docs) => {
            if(!err) res.send(docs) //Si y'a pas d'erreur tu m'envoies la docs
            else console.log("Update error : "+ err);
            }
        )
    })

module.exports = router;