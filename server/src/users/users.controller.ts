import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {UsersService} from './users.service';
import {User} from './users.model';


@ApiTags('Users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @ApiOperation({summary: 'Get all users'})
    @ApiResponse({status: 200, type: [User]})
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }

    @ApiOperation({summary: 'Get user by ID'})
    @ApiResponse({status: 200, type: User})
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.usersService.getUserById(id);
    }

    @ApiOperation({summary: 'Create user'})
    @ApiResponse({status: 201})
    @Post()
    createUser(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({summary: 'Update user info'})
    @ApiResponse({status: 200})
    @Put('/:id')
    updateUser(@Body() userDto: UpdateUserDto, @Param('id') id: string) {
        return this.usersService.updateUserById(userDto, id);
    }

    @ApiOperation({summary: 'Delete user'})
    @ApiResponse({status: 200})
    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUserById(id);
    }
}