import { displaypage  ,winnerselection} from "../controllers/mainpage_controller.js";
import {Router} from "express";

const mainrouter = Router();
mainrouter
.get('/mainpage',displaypage)
.get('/winnerdata',winnerselection)


export default mainrouter;