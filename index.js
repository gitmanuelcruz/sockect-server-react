const Server = require('./models/server');

require('dotenv').config();

const server = new Server();

server.execute();

/*
io.on('connection', (socket) => { */
    /*socket.emit('mensaje-bienvenida',{
        msg:"Bienvenido al Server",
        fecha: new Date()
    });
    console.log(socket.id);*/

/*
    socket.on('mensaje-to-server',(data)=>{
        console.log(data);

       // socket.emit('mensaje-from-server',data);//emite el mensaje solo al que hizo la peticion del socket
       io.emit('mensaje-from-server',data);
    });
});
*/
//nodemon index.js (comando para iniciar)
//npm run dev (modificando el package.json)
//npm start (modificando el package.json)