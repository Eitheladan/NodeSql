const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/user');


exports.create=(req, res, next) => {
    console.log(req.body);
    let prenom = req.body.prenom;
    console.log(prenom);
    let nom = req.body.nom;
    console.log(nom);
    let mdp = req.body.mdp;
    console.log(mdp);
    let mail = req.body.mail;
    console.log(mail);
    let tel = req.body.tel;
    console.log(tel);
    const db = dbService.getUserInstance();
    const result = db.insertNewUtilisateur(prenom, nom, mdp, mail, tel);
    result
        .then(()=>res.status(200).json({message:'Utilisateur bien créé'})
        )
        
        .catch(err => console.log(err));
}

exports.update =(req, res, next) => {
    console.log(req.body);
    let id = req.params.id;
    console.log(id);
    let prenom = req.body.prenom;
    console.log(prenom);
    let nom = req.body.nom;
    console.log(nom);
    let mdp = req.body.mdp;
    console.log(mdp);
    let mail = req.body.mail;
    console.log(mail);
    let tel = req.body.tel;
    console.log(tel);
    const db = dbService.getUserInstance();
    const result = db.updateUserById(id,prenom,nom,mdp,mail,tel);
    result
        .then(()=>res.status(200).json({message:'Utilisateur mis à jour'})
        )
        
        .catch(err => console.log(err));
}

exports.delete =(req, res, next) => {
    console.log(req.body);
    let id = req.params.id;
    console.log(id);
    const db = dbService.getUserInstance();
    const result = db.deleteUserById(id);
    result
        .then(()=>res.status(200).json({message:'Utilisateur exterminé'})
        )
        
        .catch(err => console.log(err));
}


exports.getall =(req, res, next) => {
    const db = dbService.getUserInstance();
    const result = db.getAllUser();
    result
        .then(users=>res.status(200).json(users)
        )
        
        .catch(err => console.log(err));
}


exports.getone =(req, res, next) => {
    const db = dbService.getUserInstance();
    const result = db.searchUserByName();
    result
        .then(user=>res.status(200).json(user)
        )
        
        .catch(err => console.log(err));
}