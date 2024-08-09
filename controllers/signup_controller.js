import db_data from "../../SQL_databas/databaseplugin.js";
import jwt from "jsonwebtoken";
import { fileURLToPath } from 'url';
import path from "path";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const secretkey = 'secret';
const signup = async (req, res) => {
    try {
        const { name, email, age, user_id } = req.body;
        console.log(name, email, age, user_id);
        if (age < 18) {
            res.send('sorry your age is not commited');
        }
        const payload = { user_id: user_id };
        const token = jwt.sign(payload, secretkey);
        res.cookie('token', token);

        await db_data.query('INSERT INTO users_info (name, email, age, user_id) VALUES ($1, $2, $3, $4)', [name, email, age, user_id]);


        res.sendFile(path.join(__dirname, '../public/home.html'));
    }
    catch (err) {
        res.send('error occured plz stry again');
    }
}

const displaysignup = (req, res) => {

    res.sendFile(path.join(__dirname, '../public/signup.html'));

}

export { signup, displaysignup }