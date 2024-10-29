import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { CreateOrganizationRequestDto } from 'src/openapi-client';

@Controller('users')
export class UsersController {
    constructor(private readonly userApiService: UserApiService) { }

    @Get('org')
    async getOrgList() {
        try {
            const user = await this.userApiService.getOrganizationList();
            return user;
        } catch (error) {
            return { message: 'Error retrieving user data', error };
        }
    }

    @Post('register')
    async registerOrganization(@Body() createOrganizationRequestDto: CreateOrganizationRequestDto) {
        try {
            const result = await this.userApiService.registerOrganization(createOrganizationRequestDto);
            return { message: 'Organization registered successfully', result };
        } catch (error) {
            return { message: 'Error registering organization', error };
        }
    }
}