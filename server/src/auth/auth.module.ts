import {forwardRef, Module} from '@nestjs/common';
import {JwtModule, JwtService} from '@nestjs/jwt';

import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from '../users/users.module';

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [forwardRef(() => UsersModule),
        JwtModule.register({
            secret: 'secret',
            signOptions: {
                expiresIn: '24h'
            }
        })],
    exports: [AuthService,
        JwtModule],
})
export class AuthModule {
}