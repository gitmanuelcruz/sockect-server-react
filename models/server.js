const express  = require('express');
const http     = require('http');
const socketio = require('socket.io');
const path     = require('path');
const cors     = require('cors');

const Sockets  = require('./sockets');

class Server{
    constructor(){
        this.app  = express();
        //this.port=8080;
        this.port=process.env.PORT;
        
        //http server
        this.server = http.createServer(this.app);

        //configuraciones de sockets
        this.io = socketio(this.server,{/*configuraciones */});
    }

    middlewares(){
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );
    }
    configurarSockets(){
        new Sockets(this.io);
    }

    execute(){
        //inicializar midlewares
        this.middlewares();

        this.configurarSockets();

        //inicializar el server
        this.server.listen(this.port,()=>{
            console.log('Server corriendo en puerto:', this.port );
         });
    }
}

module.exports = Server;