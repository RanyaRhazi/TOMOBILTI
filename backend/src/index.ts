import express, { Request, Response, NextFunction } from 'express';
import carRoutes from '../routes/carRoutes';
import userRoutes from '../routes/userRoutes';
import bookingRoutes from '../routes/bookingRoutes';

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// authentication
app.use((req: Request, res: Response, next: NextFunction) => {

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
});

// Mount routes on the '/api' base path
app.use('/api', carRoutes);
app.use('/api', userRoutes);
app.use('/api', bookingRoutes);

// Error handling 
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});


const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
