import { Router } from 'express';
import * as userController from '../controllers/userController';

const router = Router();

router.get('/', userController.getAllUsers);
router.post('/create', userController.createUser);
router.put('/update', userController.updateUser);
router.delete('/delete/:user_id', userController.deleteUser);
export default router;