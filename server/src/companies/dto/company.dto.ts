import {ApiProperty} from '@nestjs/swagger';
import {IsNumber, IsString, Length} from "class-validator";

export class CompanyDto {
    @IsString()
    @Length(1, 16)
    @ApiProperty({example: 'IT.agency', description: 'Company name'})
    readonly name: string;

    @IsString()
    @Length(2, 16)
    @ApiProperty({example: 'Ukraine, Kyiv', description: 'Company address'})
    readonly address: string;

    @IsString()
    @Length(2, 16)
    @ApiProperty({example: 'IT', description: 'Service of activity'})
    readonly serviceOfActivity: string;

    @IsString()
    @Length(1, 16)
    @ApiProperty({example: '200', description: 'Number of employees'})
    readonly numberOfEmployees: string;

    @IsString()
    @Length(2, 32)
    @ApiProperty({example: 'Customer software development', description: 'Company description'})
    readonly description: string;

    @IsString()
    @Length(2, 16)
    @ApiProperty({example: 'outsourcing', description: 'Type of company'})
    readonly type: string;

    @IsNumber()
    @ApiProperty({example: '2', description: 'Owner ID'})
    readonly userId: number;
}