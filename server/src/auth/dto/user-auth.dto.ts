import {ApiProperty} from '@nestjs/swagger';

export class AuthUserDto {
    @ApiProperty({example: 'email@email.com', description: 'User`s email', required: true})
    readonly email: string;

    @ApiProperty({example: 'YT56he93G', description: 'Password', required: true})
    readonly password: string;
}