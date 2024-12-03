import  express from "express";
import https from "https";
import http  from "http";
import path  from "path"; 
import fs from "fs";
import { fileURLToPath } from 'url';



const tlsApp = express()
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

tlsApp.get("/", (req, res) => { 
	res.send("Hello geeks, I am running on https!") 
}) 

/*** 
const httpServer = http.createServer(app) 

httpServer.listen(3000, () => { 
	console.log("HTTP server up and running on port 3000") 
})
***/


const httpsServer = https.createServer( 
    { 
    
        key: fs.readFileSync(path.join(__dirname,  
            "keys", "private_key.pem")), 
        cert: fs.readFileSync(path.join(__dirname, 
            "keys", "cert.pem")), 
    }, 
    tlsApp 
) 
  
httpsServer.listen(3001, () => { 
    console.log("HTTPS server up and running on port 3001") 
})