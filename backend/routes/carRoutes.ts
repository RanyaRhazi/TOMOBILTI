import express from 'express';
import { getAllCars, createCar, deleteCar } from '../controllers/carController';

const router = express.Router();

router.get('/cars', getAllCars);
router.post('/cars', createCar);
router.delete('/cars/:id', deleteCar);

export default router;
