import { Model, DataTypes } from 'sequelize';
import db from '../../database/db';
import sequelize from '../../database/db';

interface BookingAttributes {
    id: number;
    user_id: number;
    car_id: number;
    start_date: number;
    end_date : number;
    total_price: number;
}

class Booking extends Model<BookingAttributes> implements BookingAttributes {
    public id!: number;
    public user_id!: number;
    public car_id!: number;
    public start_date!: number;
    public end_date!: number;
    public total_price!: number;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

Booking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        car_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        start_date: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        end_date: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        total_price: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },       
    {
        sequelize: db,
        modelName: 'Booking',
        tableName: 'Booking'
    }
);

export default Booking;