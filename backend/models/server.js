const express = require('express');
const cors = require(`cors`);
class Server {
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.mongo_uri = process.env.MONGO_URI;
        this.CryptoPath = "/api/crypto";
        this.DineroPatch = "/api/dinero";
        this.AccionesPatch = "/api/acciones";
        this.TradersPatch = "/api/traders";
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(`public`));
    }

    routes(){
        this.app.use(this.CryptoPath, require(`../routes/crypto.routes.js`));
        this.app.use(this.DineroPatch, require(`../routes/dinero.routes.js`));
        this.app.use(this.AccionesPatch, require(`../routes/acciones.routes.js`));
        this.app.use(this.TradersPatch, require("../routes/traders.routes.js"));
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;