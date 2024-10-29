// src/users/user-api.service.ts

import { Injectable } from '@nestjs/common';
import { Configuration, DefaultApi, CreateOrganizationRequestDto } from '../openapi-client';

@Injectable()
export class UserApiService {
    private defaultApi: DefaultApi;
    private configuration: Configuration;

    constructor() {
        this.configuration = new Configuration({
            basePath: 'https://api.wavital.ai',
            accessToken: process.env.BEARER_TOKEN
        });
        this.defaultApi = new DefaultApi(this.configuration);
    }


    async registerOrganization(createOrganizationRequestDto: CreateOrganizationRequestDto) {
        try {
            console.log('this.defaultApi', this.defaultApi)
            const response = await this.defaultApi.organizationControllerRegister({
                createOrganizationRequestDto
            })
            return response;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
    }

}
