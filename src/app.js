const express = require('express');//importa o modulo express pra variavel express
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');
const app = express(); //instancia a aplicação


app.use(cors());
app.use(express.json());//pra declarar q usa o json para requisições
app.use(routes);
app.use(errors());


 



module.exports = app;
