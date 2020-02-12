import Server from "./class/server";
import router from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//-----bodyParser--------
//Esto hayq ue hacerlo antes de las rutas ademas de que lo que hace es generar un archivo de js
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//-----------------------
//--------CORS-----------
server.app.use(cors ({ origin: true, credentials: true /*Esto evita que cualquiera pueda llamar a mis servicios*/  }))//npm install @types/cors --save-dep para quitar el error del import
//-----------------------
//---Rutas de Servicio---
server.app.use('/', router);//hayq ue estar atento que no importe de express si no de routes
//-----------------------

server.start(()=>{
    console.log(`Servidor corriendo en el puerto ${server.port}`)
})

