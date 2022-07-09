import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Body, Controller, Get, Post} from '@nestjs/common';

import {AuthService} from './auth.service';
import {AuthUserDto} from './dto/user-auth.dto';
import {CreateUserDto} from '../users/dto/create-user.dto';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @ApiOperation({summary: 'Sign in'})
    @ApiResponse({status: 201})
    @Post('/signin')
    signIn(@Body() authDto: AuthUserDto) {
        return this.authService.signIn(authDto)
    }

    @ApiOperation({summary: 'Sign up'})
    @ApiResponse({status: 201})
    @Post('/signup')
    signUp(@Body() userDto: CreateUserDto) {
        return this.authService.signUp(userDto)
    }
}