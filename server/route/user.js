const product =  require('../controller/user.js');
const express =  require('express');
const router =  express.Router();

// create
router.post('/insert', user.create );

// update
router.put('/update/:id', user.update); 

// delete
router.delete('/delete/:id', user.delete);

// read
router.get('/getall', user.getall);

// search
router.get('/getone/:nom', user.getone);


module.exports = router;