
import express from 'express'
import Database from './src/database/database.js';
import { routes } from './src/route/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
const port=4000;
app.use(bodyParser.json())
app.use(cors());
app.use(routes)
let db = new Database;
app.listen(port, ()=>{
    console.log('application demarre sur http://127.0.0.1:'+port)
})