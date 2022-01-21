import express from 'express';
import { registerData } from '../controllers/registerController.js';
import { loginData } from '../controllers/loginController.js';
const router = express.Router();
import signUpTemplateCopy from '../models/registerModels.js'

router.post('/register', registerData);
router.post('/login', loginData);

export default router;