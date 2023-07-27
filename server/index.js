import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(cors());
app.use("/",router);

//Static Folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname,'./client/build')))


//Static Route
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
});

const PORT = 8000;

DBConnection();

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));