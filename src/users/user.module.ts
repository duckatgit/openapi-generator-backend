
import { Module } from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { UsersController } from './users.controller';

@Module({
    controllers: [UsersController],
    providers: [UserApiService],
    exports: [UserApiService],
})
export class UsersModule { }