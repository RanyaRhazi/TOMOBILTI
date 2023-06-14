import { Model, DataTypes } from 'sequelize';
import db from '../../database/db';
import sequelize from '../../database/db';

interface CarAttributes {
  id: number;
  brand: string;
  model: string;
  year: number;
  color?: string;
  seats?: number;
  price_per_day: number;
  availability?: boolean;
}

class Car extends Model<CarAttributes> implements CarAttributes {
  public id!: number;
  public brand!: string;
  public model!: string;
  public year!: number;
  public color?: string;
  public seats?: number;
  public price_per_day!: number;
  public availability?: boolean;


  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING
    },
    seats: {
      type: DataTypes.INTEGER
    },
    price_per_day: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize: db,
    modelName: 'Car',
    tableName: 'Car'
  }
);

export default Car;
