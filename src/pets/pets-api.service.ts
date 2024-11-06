// src/users/user-api.service.ts

import { Injectable } from '@nestjs/common';
import { Configuration, StoreApi } from '../petstore-client';

@Injectable()
export class PetApiService {
    private defaultApi: StoreApi;
    private configuration: Configuration;

    constructor() {
        this.configuration = new Configuration({
            basePath: 'https://petstore3.swagger.io/api/v3',
            accessToken: process.env.BEARER_TOKEN
        });
        this.defaultApi = new StoreApi(this.configuration);
    }


    async filterPetByStatus() {
        try {
            console.log('this.defaultApi', this.defaultApi);
            const response = await this.defaultApi.getInventory();
            return response;
        } catch (error) {
            console.error('Error fetching pets:', error);
            throw error;
        }
    }
}
