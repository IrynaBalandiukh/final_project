import {ApiProperty} from '@nestjs/swagger';
import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';

import {User} from '../users/users.model';

interface CompanyCreationAttrs {
    name: string;
    address: string;
    serviceOfActivity: string;
    numberOfEmployees: string;
    description: string;
    type: string;
}

@Table({tableName: 'Companies'})
export class Company extends Model<Company, CompanyCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique company ID'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true})
    id: number;

    @ApiProperty({example: 'IT.agency', description: 'Company name'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Ukraine, Kyiv', description: 'Company address'})
    @Column({type: DataType.STRING, allowNull: false})
    address: string;

    @ApiProperty({example: 'IT', description: 'Service of activity'})
    @Column({type: DataType.STRING, allowNull: false})
    serviceOfActivity: string;

    @ApiProperty({example: '200', description: 'Number of employees'})
    @Column({type: DataType.STRING, allowNull: false})
    numberOfEmployees: string;

    @ApiProperty({example: 'customer software development', description: 'Company description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: 'outsourcing', description: 'Type of company'})
    @Column({type: DataType.STRING, allowNull: false})
    type: string;

    @ApiProperty({example: '2', description: 'Owner ID'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}