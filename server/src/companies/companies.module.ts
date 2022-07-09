import {JwtModule, JwtService} from '@nestjs/jwt';
import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

import {Company} from './companies.model';
import {CompaniesController} from './companies.controller';
import {CompaniesService} from './companies.service';
import {User} from '../users/users.model';

@Module({
    controllers: [CompaniesController],
    providers: [CompaniesService],
    imports: [
        JwtModule,
        SequelizeModule.forFeature([User, Company])
    ]
})
export class CompaniesModule {
}
