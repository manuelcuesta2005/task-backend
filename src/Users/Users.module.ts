import { Users } from "./models/Users";
import { Module } from "@nestjs/common/";
import { UsersService } from "./Users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersController } from "./Users.controller";

@Module({
    imports: [SequelizeModule.forFeature([Users])],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {};