import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/sequelize';

import {Company} from './companies.model';
import {CompanyDto} from './dto/company.dto';

@Injectable()
export class CompaniesService {
    constructor(@InjectModel(Company) private readonly companyRepository: typeof Company) {
    }

    async getAll() {
        return await this.companyRepository.findAll();
    }

    async getById(companyId: string) {
        return await this.companyRepository.findOne({where: {id: Number(companyId)}});
    }

    async getByUserId(userId: string) {
        return await this.companyRepository.findAll({where: {userId: Number(userId)}})
    }

    async create(companyDto: CompanyDto) {
        return this.companyRepository.create(companyDto)
    }

    async updateById(companyDto: CompanyDto, companyId: string) {
        return await this.companyRepository.update({
            name: companyDto.name,
            address: companyDto.address,
            serviceOfActivity: companyDto.serviceOfActivity,
            numberOfEmployees: companyDto.numberOfEmployees,
            description: companyDto.description,
            type: companyDto.type,
        }, {where: {id: Number(companyId)}})
    }

    async deleteById(companyId: string) {
        await this.companyRepository.destroy({where: {id: Number(companyId)}})
        return companyId
    }
}