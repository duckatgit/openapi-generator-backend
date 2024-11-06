import { Controller, Get } from '@nestjs/common';
import { PetApiService } from './pets-api.service';

@Controller('pets')
export class PetsController {
    constructor(private readonly userApiService: PetApiService) { }

    @Get('filterpet')
    async filterPetStatus() {
        try {
            const result = await this.userApiService.filterPetByStatus();
            return { message: 'Organization registered successfully', result };
        } catch (error) {
            return { message: 'Error registering organization', error };
        }
    }
}