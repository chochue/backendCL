const express = require('express')
var cors = require('cors')

class Server {

    constructor(){
         this.app = express();
         this.port = process.env.PORT;
         this.usuariosPath = '/api/usuarios';
         
         //Middlewares
        this.middlewares();


         //rutas de mi aplicacion
         this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors() );

        //Parseo y lectura del Body
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public'));
    }

    routes(){
        
       this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto: ', this.port);
        }
        );
    }
}

module.exports = Server;