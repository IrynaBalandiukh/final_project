import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty, IsString, Length} from 'class-validator';

export class UpdateUserDto {
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
    @ApiProperty({example: 'alex7', description: 'Unique username'})
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