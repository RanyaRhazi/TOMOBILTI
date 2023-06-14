import { Model, DataTypes } from 'sequelize';
import db from '../../database/db';
import sequelize from '../../database/db';

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
}  

class User extends Model<UserAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public phone_number!: string;
    public address!: string;

    public created_at: Date;
    public updated_at: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_number:{
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'User',
        tableName: 'User'
    }
);

export default User;