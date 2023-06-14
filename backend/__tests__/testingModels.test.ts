// car.test.ts
import Car from '../models/Car';

describe('Car Model', () => {
  test('should create a new car instance', () => {
    const carData = {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2022,
      price_per_day: 50,
    };

    const car = new Car(carData);

    expect(car.brand).toBe(carData.brand);
    expect(car.model).toBe(carData.model);
    expect(car.year).toBe(carData.year);
    expect(car.price_per_day).toBe(carData.price_per_day);
  });
});
