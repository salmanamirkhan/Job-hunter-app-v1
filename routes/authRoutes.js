import express from 'express';
const router = express.Router();
import { register, updateUser, login } from '../controllers/authController.js';

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/updateuser').patch(updateUser);

export default router;
