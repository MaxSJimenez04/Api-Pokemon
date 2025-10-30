const express = require('express');
const cors = require('cors');
const path = require('path');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/pokemons/', require('../routes/pokemons'));
        this.app.get('*',(req, res)=>{
            res.sendFile(path.join(__dirname,'../public/404.html'))
        });
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor escuchando en puerto ${this.port}`);
        })
    }
}

module.exports = Server;