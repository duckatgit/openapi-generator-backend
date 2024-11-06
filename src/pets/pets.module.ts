
import { Module } from '@nestjs/common';
import { PetApiService } from './pets-api.service';
import { PetsController } from './pets.controller';

@Module({
    controllers: [PetsController],
    providers: [PetApiService],
    exports: [PetApiService],
})
export class PetsModule { }