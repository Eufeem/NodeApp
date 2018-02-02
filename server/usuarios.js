'use strict';

var mysql       = require('mysql');
var queryString = 'SELECT * FROM usuarios';

var connection  = mysql.createConnection (
    {
        host:     "localhost",
        user:     "root",
        password: "",
        database: "esv"
    }
);

connection.connect();

// Consulta
exports.queryUsuarios = () => {
    connection.query(queryString, (err, rows, fields) => {
        if (err) throw err;

        // No funciona :(
        // res.render('/usuarios', {
        //     news: rows
        // });
        for (var i in rows) {
            console.log('Usuarios   => ' + rows[i].usuario);
            console.log('Contrasena => ' + rows[i].contrasena);
            console.log('Rol        => ' + rows[i].rol);
            console.log('----------------------------------------');
        }
    });

    connection.end();
}
