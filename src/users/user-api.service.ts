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
            accessToken: async () => {
                const token = process.env.BEARER_TOKEN; // Fetch token from environment
                if (!token) {
                    throw new Error("Bearer token is not set.");
                }
                return token;
            },
        });
        this.defaultApi = new DefaultApi(this.configuration);
    }

    async getOrganizationList() {
        try {
            console.log('this.defaultApi', this.defaultApi)
            const organizations = await this.defaultApi.userControllerGetOrganizations();
            return organizations;
        } catch (error) {
            console.error('Error fetching user:', error);
            throw error;
        }
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
