import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import db_data from '../../SQL_databas/databaseplugin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const displayhomepage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
};

const handlevotes = async (req, res) => {
    const { user_id } = req.body;
    try {
        await db_data.query('INSERT INTO user_data (user_id) VALUES ($1)', [Number(user_id)]);
        res.redirect('/home');
    } catch (err) {
        res.status(400).send('Sorry, cannot insert data into database.');
    }
};

const getdata = async (req, res) => {
    try {
        const data = await db_data.query('SELECT * FROM user_data');
        res.json(data.rows);
    } catch (err) {
        res.status(400).send('Sorry, cannot fetch data.');
    }
};

const postmaxdata = async (req, res) => {
    const { postobj_2 } = req.body;

    try {
        console.log('this is postobj_2: ');
        console.log(postobj_2);

        await db_data.query('INSERT INTO winner (party_name,votes) values ($1,$2)',[postobj_2.party_name,Number(postobj_2.counter)]);
        res.send('da done');
    } catch (err) {
        res.status(400).send('Error posting data');
    }
};





export { displayhomepage, handlevotes, getdata, postmaxdata };
