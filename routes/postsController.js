const express = require('express');
const router = express.Router();

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

router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        author : req.body.author,
        message: req.body.mesage,
    });
    newRecord.save((err, docs)=> {
        if (!err) res.send(docs);
        else console.log('Error creating new data: '+ err);
    });
});

module.exports = router