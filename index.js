import express from 'express';
import { crud_cliente } from './controlador/crud_cliente.js';


const app_e = express();
app_e.use(express.urlencoded({extended:false}));
app_e.use(express.json());
app_e.use(express.static('./controlador'));
app_e.use(express.static('./modelo'));
app_e.use(express.static('./vista'));
app_e.set('views', './vista');
app_e.set('view engine', 'ejs');


app_e.listen('5000',function(){
    console.log('Aplicacion esta Iniciada: http://localhost:5000/');  
})
app_e.get('/',crud_cliente.leer);
app_e.post('/crud_c',crud_cliente.crud);
