import express from 'express';
import { registerData,loginData } from '../controllers/authController.js';
const router = express.Router();
import signUpTemplateCopy from '../models/registerModels.js'

router.post('/register', registerData);
router.post('/login', loginData);

export default router;