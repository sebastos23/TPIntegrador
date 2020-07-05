const express = require('express');
const app = express();

app.listen(3030, ()=> console.log('Puerto funcionando'));

const rutaHome = require('./routes/home');
const rutaSucursales = require ('./routes/sucursales');
const rutaMarcas = require('./routes/marcas');
const rutaAutos = require('./routes/autos');

app.use ('/', rutaHome);
app.use('/sucursales', rutaSucursales);
app.use('/marcas', rutaMarcas);
app.use('/autos', rutaAutos);