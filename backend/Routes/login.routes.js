import {Router} from 'express'
import { loginUser } from '../Controllers/login.controller.js';

const login= Router();
login.post('/',loginUser);

export default login;
    