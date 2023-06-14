import express from 'express';
import { authenticateToken } from '../credentials/authMiddleware';
import { getAllBookings, createBooking, deleteBooking } from '../controllers/bookingController';

const router = express.Router();

// Booking Routes
router.get('/bookings/protected', authenticateToken, getAllBookings);
router.post('/bookings/protected', authenticateToken, createBooking);
router.delete('/bookings/:id, protected', authenticateToken, deleteBooking);

export default router;
