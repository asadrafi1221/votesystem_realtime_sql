import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db_data from '../../SQL_databas/databaseplugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const displaypage = (req, res) => {
    res.sendFile(path.join(__dirname,'../public/winner.html'));
}

const winnerselection = async (req,res)=>{
    const data = await db_data.query('select * from winner');
    res.send(data.rows);
}

export { displaypage ,winnerselection};


