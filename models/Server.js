const express = require('express');
const cors = require('cors');
const { connect } = require('../database/config');


class Server{
    constructor(){
        this.server = express();
        this.port = process.env.PORT;
        
        this.initConnection();
        this.middlewares();
        this.routes();
    }

    async initConnection(){
        await connect();
    }

    middlewares(){
        this.server.use(cors());
        this.server.use(express.json());
        this.server.use(express.static('public'));
    }

    routes(){
        this.server.use('/appointments/', require('../routes/appointments.routes'));
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log(`Server listening on port ${this.port}`)
        });
    }
}

module.exports = Server;