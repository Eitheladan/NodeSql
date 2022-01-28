const dotenv = require('dotenv');
dotenv.config();

const dbService = require('../service/product');


exports.create=(req, res, next) => {
    console.log(req.body);
    let nom = req.body.nom;
    console.log(nom);
    let prix = req.body.prix;
    console.log(prix);
    let stock = req.body.stock;
    console.log(stock);
    const db = dbService.getProductInstance();
    const result = db.insertNewProduit(nom, prix, stock);
    result
        .then(()=>res.status(200).json({message:'Produit bien créé'})
        )
        
        .catch(err => console.log(err));
}

exports.update =(req, res, next) => {
    console.log(req.body);
    let id = req.params.id;
    console.log(id);
    let nom = req.body.nom;
    console.log(nom);
    let prix = req.body.prix;
    console.log(prix);
    let stock = req.body.stock;
    console.log(stock);
    const db = dbService.getProductInstance();
    const result = db.updateProductById(id,nom,prix,stock);
    result
        .then(()=>res.status(200).json({message:'Produit mis à jour'})
        )
        
        .catch(err => console.log(err));
}

exports.delete =(req, res, next) => {
    console.log(req.body);
    let id = req.params.id;
    console.log(id);
    const db = dbService.getProductInstance();
    const result = db.deleteProductById(id);
    result
        .then(()=>res.status(200).json({message:'Produit exterminé'})
        )
        
        .catch(err => console.log(err));
}


exports.getall =(req, res, next) => {
    const db = dbService.getProductInstance();
    const result = db.getAllProduct();
    result
        .then(products=>res.status(200).json(products)
        )
        
        .catch(err => console.log(err));
}


exports.getone =(req, res, next) => {
    const db = dbService.getProductInstance();
    const result = db.searchProductByName();
    result
        .then(product=>res.status(200).json(product)
        )
        
        .catch(err => console.log(err));
}