import mysql from 'mysql';
var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'usr_empresa',
    password: 'empresa@123',
    database: 'db_empresa'
});
conectar.connect(function(err){
    if(err){
        console.error('Error al conectar a la base de datos: ' + err.stack);
        return;
    } else {
        console.log('Conectado a la base de datos' + conectar.threadId);
    }
});

export {conectar};