import {ApiProperty} from '@nestjs/swagger';
import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';

import {Company} from '../companies/companies.model';

interface UserCreationAttrs {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    nick_name: string;
    description: string;
    position: string;
}

@Table({tableName: 'Users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Unique user ID'})
    @Column({type: DataType.INTEGER, autoIncrement: true, unique: true, allowNull: false, primaryKey: true})
    id: number;

    @ApiProperty({example: 'email@email.com', description: 'Unique user email', required: true})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'YT56he93G', description: 'User password', required: true})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Alex', description: 'User first name'})
    @Column({type: DataType.STRING, allowNull: false})
    first_name: string;

    @ApiProperty({example: 'Black', description: 'User last name'})
    @Column({type: DataType.STRING, allowNull: false})
    last_name: string;

    @ApiProperty({example: 'alex7', description: 'Unique username', required: true})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    nick_name: string;

    @ApiProperty({example: 'full-stack developer', description: 'User description'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: 'owner', description: 'User position'})
    @Column({type: DataType.STRING, allowNull: false})
    position: string;

    @HasMany(() => Company)
    companies: Company[];
}