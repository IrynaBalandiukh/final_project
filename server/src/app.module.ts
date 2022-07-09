import {ConfigModule} from '@nestjs/config';
import {Module} from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

import {AuthModule} from './auth/auth.module';
import {CompaniesModule} from './companies/companies.module';
import {Company} from './companies/companies.model';
import {User} from './users/users.model';
import {UsersModule} from './users/users.module';

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Company],
            autoLoadModels: true
        }),
        UsersModule,
        CompaniesModule,
        AuthModule
    ]
})
export class AppModule {
}
