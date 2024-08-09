import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db_data from '../../SQL_databas/databaseplugin.js';
import mainrouter from '../routes/mainpage.js';
import { verify } from 'crypto';
import jwt from "jsonwebtoken";
import { decode } from 'querystring';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const displayhomepage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));

   
};

const handlevotes = async (req, res) => {
    const { user_id } = req.body;   
    const token = req.cookies;
    const secret = 'secret';

    console.log(token);
   
    try{
    try {
        var decoded = jwt.verify(token, secret);
    } catch (error) {
        return res.status(401).json({message: error.message})
    }

        console.log(decoded);

        let userid =  decoded.user_id;
        if(user_id !==user_id){
res.send('plz try another one ');
        }
    }
     catch (err) {
        res.status(400).send('Sorry, cannot insert data into database.');
    }
};

const getdata = async (req, res) => {
    try {
        const data = await db_data.query('SELECT user_id FROM users_info');
        res.json(data.rows);
        
    } catch (err) {
        res.status(400).send('Sorry, cannot fetch data.');
    }
};

 
const postmaxdata = async (req, res) => {
    const { postobj_2 } = req.body;
     const secret = 'secret';

    try {
        console.log('this is postobj_2: '); 
        
        console.log(postobj_2);

        await db_data.query('INSERT INTO winner (party_name,votes) values ($1,$2)',[postobj_2.party_name,Number(postobj_2.counter)]);
        res.send('done');
    } catch (err) {
        res.status(400).send('Error posting data');
    }
};





export { displayhomepage, handlevotes, getdata, postmaxdata };
