import { Request, Response } from 'express';
import { getAllCars, createCar } from '../controllers/carController';
import Car from '../models/Car';

jest.mock('../models/Car');

describe('Car Controller', () => {
  const mockRequest = {} as Request;
  const mockResponse = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  } as unknown as Response;

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should get all cars', async () => {
    const carsData = [
      {
        id: 1,
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        price_per_day: 50,
      },
      {
        id: 2,
        brand: 'Honda',
        model: 'Accord',
        year: 2021,
        price_per_day: 60,
      },
    ];

    (Car.findAll as jest.Mock).mockResolvedValueOnce(carsData);

    await getAllCars(mockRequest, mockResponse);

    expect(Car.findAll).toHaveBeenCalledTimes(1);
    expect(mockResponse.json).toHaveBeenCalledWith(carsData);
  });

  test('should create a new car', async () => {
    const carData = {
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
      price_per_day: 50,
    };

    const createdCar = {
      id: 1,
      ...carData,
    };

    (Car.create as jest.Mock).mockResolvedValueOnce(createdCar);

    mockRequest.body = carData;

    await createCar(mockRequest, mockResponse);

    expect(Car.create).toHaveBeenCalledTimes(1);
    expect(Car.create).toHaveBeenCalledWith(carData);
    expect(mockResponse.json).toHaveBeenCalledWith(createdCar);
  });
});
