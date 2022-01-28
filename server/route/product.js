
const product =  require('../controller/product.js');
const express =  require('express');
const router =  express.Router();

// create
router.post('/insert', product.create );

// update
router.put('/update/:id', product.update); 

// delete
router.delete('/delete/:id', product.delete);

// read
router.get('/getall', product.getall);

// search
router.get('/getone/:nom', product.getone);


module.exports = router;