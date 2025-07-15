import Router from 'express';
import { registerUser } from '../Controllers/register.controller.js';

const register = Router();


register.post('/', registerUser);

export default register;