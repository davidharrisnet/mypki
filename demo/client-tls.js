import fetch from 'node-fetch';
import fs from 'fs';
import path  from "path";
import { fileURLToPath } from 'url';
import https from "https";

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);



async function makeRequest() {
    const key = fs.readFileSync(path.join(__dirname,  
        "keys", "private_key.pem"));
    const cert = fs.readFileSync(path.join(__dirname, 
        "keys", "cert.pem"));

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    agent: new (https.Agent)({
      cert: cert,
      key: key,
      rejectUnauthorized: false
    })
  };

  try {
    const response = await fetch('https://localhost:3001', options);
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

makeRequest();
