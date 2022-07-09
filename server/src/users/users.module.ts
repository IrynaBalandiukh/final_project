import {forwardRef, Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

import {AuthModule} from '../auth/auth.module';
import {Company} from '../companies/companies.model';
import {User} from './users.model';
import {UsersController} from './users.controller';
import {UsersService} from './users.service';

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([User, Company]),
        forwardRef(() => AuthModule)
    ],
    exports: [UsersService],
})

export class UsersModule {
}
