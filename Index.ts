import Server from "./Classes/server";
import router from "./Routes/router";
import bodyParser from "body-parser";
import cors from "cors";


const server =  Server.instance;


// BodyParser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );

// CORS
server.app.use( cors({ origin: true, credentials: true  }) );




// Rutas de servicios
server.app.use('/', router );

 server.start( () =>{
console.log(`Servidor corriendo en el puerto: ${server.port}`) 
 });

