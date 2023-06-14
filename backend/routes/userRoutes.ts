import express from 'express';
import { authenticateToken } from '../credentials/authMiddleware';
import { getAllUsers, createUser, deleteUser } from '../controllers/userController';

const router = express.Router();

// User Routes
router.get('/users/protected', authenticateToken, getAllUsers);
router.post('/users/protected', authenticateToken, createUser);
router.delete('/users/:id, protected', authenticateToken, deleteUser);

export default router;
