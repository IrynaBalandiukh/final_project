import {ApiProperty} from '@nestjs/swagger';
import {IsString, Length, IsNotEmpty, IsEmail} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(5, 32)
    @IsEmail()
    @ApiProperty({example: 'email@email.com', description: 'Unique user email'})
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    @Length(6, 32)
    @ApiProperty({example: 'YT56he93G', description: 'User password', required: true})
    readonly password: string;

    @IsString()
    @Length(2, 16)
    @ApiProperty({example: 'Alex', description: 'User first name'})
    readonly first_name: string;

    @IsString()
    @Length(2, 16)
    @ApiProperty({example: 'Black', description: 'User last name'})
    readonly last_name: string;

    @IsString()
    @IsNotEmpty()
    @Length(2, 16)
    @ApiProperty({example: 'alex7', description: 'Unique username', required: true})
    readonly nick_name: string;

    @IsString()
    @Length(2, 32)
    @ApiProperty({example: 'full-stack developer', description: 'User description'})
    readonly description: string;

    @IsString()
    @Length(2, 32)
    @ApiProperty({example: 'owner', description: 'User position'})
    readonly position: string;
}