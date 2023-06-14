import { Request, Response } from 'express';
import Car from '../models/Car';

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const createCar = async (req: Request, res: Response) => {
  try {
    const { id, brand, model, year, price_per_day } = req.body;

    const newCar = await Car.create({
      id,
      brand,
      model,
      year,
      price_per_day
    });

    res.json(newCar);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const carId = parseInt(req.params.id);

    const deletedCar = await Car.destroy({
      where: {
        id: carId
      }
    });

    if (deletedCar) {
      res.json({ message: 'Car deleted successfully' });
    } else {
      res.status(404).json({ message: 'Car not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
