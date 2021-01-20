const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//importando rutas.
const contactoRoutes = require('./routes/contacto');
const { urlencoded } = require('express');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 33065,
    database: 'crudcontactos'
}, 'single'));
app.use(express.urlencoded({extended: false}));

//routes
app.use('/', contactoRoutes);

//static files
app.use(express.static(path.join('__dirname', 'public')));

app.listen(app.get('port'), () =>{
    console.log('server ejecutado en el puerto 3000');
});