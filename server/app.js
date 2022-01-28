const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');
const product =  require('./controller/product.js');
const routeProduct = require('./route/product.js');
const user =  require('./controller/user.js');
const routeUser = require('./route/user.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use(routeProduct);
app.use(routeUser);


app.listen(process.env.PORT, () => console.log('app is running'));