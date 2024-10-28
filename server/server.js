const express = require('express');

class Server{

    constructor(){
        this.app = express();
        this.port = 3000;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/duenios', require('../routes/duenio'));
        this.app.use('/mascotas', require('../routes/mascota'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando en el puerto ' + this.port);
        });
    }

}

module.exports = Server;