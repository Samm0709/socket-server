import express from 'express';
import { SERVER_PORT } from '../global/environment';



export default class Server {

    public app: express.Application;
    public port: number;
    //ir al cmd npm install @types/express --save-dev(revisar en package.json para ver si s eintslao)

constructor( ){
    this.app=express();//hay que inicializar aqui la var app
    this.port = SERVER_PORT;/*hay que crear en la carpeta global  la constante SERVER_PORT
                          E  IMPORTAR ESA CARPETA*/
    }

    start(callback: Function){
        this.app.listen(this.port, callback());
    }
}