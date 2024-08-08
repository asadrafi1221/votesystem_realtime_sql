import express from "express";
import bodyParser from "body-parser";
import router from "./routes/homeroutes.js";
import mainrouter from "./routes/mainpage.js";
const app = express();
const port = 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     
    extended: true
}));

app.use(router);

app.use(mainrouter)
app.listen(port, () => {
    console.log(`app is listening on port no ${port}`);
})