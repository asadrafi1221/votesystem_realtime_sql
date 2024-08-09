import express from "express";
import bodyParser from "body-parser";
import router from "./routes/homeroutes.js";
import signup_router from "./routes/signuproute.js";
import mainrouter from "./routes/mainpage.js";
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({     
    extended: true
}));

app.use(signup_router);
app.use(router);

app.use(mainrouter)
app.listen(port, () => {
    console.log(`app is listening on port no ${port}`);
})