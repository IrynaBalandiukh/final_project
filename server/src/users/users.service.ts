import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';

import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {User} from './users.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {
    }

    async getAllUsers() {
        return await this.userRepository.findAll({include: {all: true}});
    }

    async getUserById(userId: string) {
        return await this.userRepository.findOne({where: {id: Number(userId)}, include: {all: true}});
    }

    async getUserByEmail(userEmail: string) {
        return await this.userRepository.findOne({where: {email: userEmail}});
    }

    async createUser(userDto: CreateUserDto) {
        return await this.userRepository.create(userDto);
    }

    async updateUserById(userDto: UpdateUserDto, userId: string) {
        return await this.userRepository.update({
            first_name: userDto.first_name,
            last_name: userDto.last_name,
            nick_name: userDto.nick_name,
            description: userDto.description,
            position: userDto.position
        }, {where: {id: Number(userId)}});
    }

    async deleteUserById(userId: string) {
        return await this.userRepository.destroy({where: {id: Number(userId)}});
    }
}
