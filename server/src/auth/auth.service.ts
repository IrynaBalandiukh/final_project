import * as bcrypt from 'bcryptjs';
import {JwtService} from '@nestjs/jwt';
import {
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';

import {AuthUserDto} from './dto/user-auth.dto';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {User} from '../users/users.model';
import {UsersService} from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private userService: UsersService) {
    }

    async signIn(authDto: AuthUserDto) {
        const user = await this.validateUser(authDto);
        return this.generateToken(user);
    }

    async signUp(userDto: CreateUserDto) {
        const findUser = await this.userService.getUserByEmail(userDto.email)
        if (findUser) {
            throw new HttpException('User is already exist', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword});
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {
            id: user.id,
            email: user.email,
            nick_name: user.nick_name,
            position: user.position
        };
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(authDto: AuthUserDto) {
        const userDB = await this.userService.getUserByEmail(authDto.email);
        const passwordEqual = await bcrypt.compare(authDto.password, userDB.password);
        if (userDB && passwordEqual) {
            return userDB
        }
        throw new UnauthorizedException({message: 'Incorrect email or password'})
    }
}