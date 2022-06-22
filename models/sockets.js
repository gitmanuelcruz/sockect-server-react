class Sockets{

    constructor(io){
        this.io=io;

        this.socketEvents();
    }

    socketEvents(){
        //on Connecton
        this.io.on('connection', (socket) => { 

            //escuchar evento
            socket.on('mensaje-to-server',(data)=>{
                console.log(data);
        
               // socket.emit('mensaje-from-server',data);//emite el mensaje solo al que hizo la peticion del socket
               this.io.emit('mensaje-from-server',data);
            });
        });
    }
}
module.exports = Sockets;