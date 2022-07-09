import {ApiOperation, ApiResponse, ApiTags} from '@nestjs/swagger';
import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

import {Company} from './companies.model';
import {CompaniesService} from './companies.service';
import {CompanyDto} from './dto/company.dto';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {

    constructor(private readonly companiesService: CompaniesService) {
    }

    @ApiOperation({summary: 'Get all companies'})
    @ApiResponse({status: 200, type: [Company]})
    @Get()
    getAll() {
        return this.companiesService.getAll()
    }

    @ApiOperation({summary: 'Get company by ID'})
    @ApiResponse({status: 200, type: Company})
    @Get('/:id')
    getById(@Param('id') id: string) {
        return this.companiesService.getById(id)
    }

    @ApiOperation({summary: 'Get company by user ID'})
    @ApiResponse({status: 200, type: Company})
    @Get('/user/:userId')
    getByUserId(@Param('userId') userId: string) {
        return this.companiesService.getByUserId(userId)
    }

    @ApiOperation({summary: 'Create company'})
    @ApiResponse({status: 201, type: Company})
    @Post()
    creteCompany(@Body() companyDto: CompanyDto) {
        return this.companiesService.create(companyDto)
    }

    @ApiOperation({summary: 'Update company info'})
    @ApiResponse({status: 200, type: Company})
    @Put('/:id')
    updateUser(@Body() companyDto: CompanyDto, @Param('id') id: string) {
        return this.companiesService.updateById(companyDto, id)
    }

    @ApiOperation({summary: 'Delete company'})
    @ApiResponse({status: 200, type: Company})
    @Delete('/:id')
    deleteCompany(@Param('id') id: string) {
        return this.companiesService.deleteById(id)
    }
}