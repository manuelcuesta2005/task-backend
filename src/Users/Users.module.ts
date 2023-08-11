import { Users } from "./models/Users";
import { JwtModule } from "@nestjs/jwt";
import { Module } from "@nestjs/common/";
import { UsersService } from "./Users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersController } from "./Users.controller";

@Module({
    imports: [SequelizeModule.forFeature([Users]), 
    JwtModule.register({
        global: true,
        secret: "08032005",
        signOptions: {expiresIn: '60s'},
    }),],
    controllers: [UsersController],
    providers: [UsersService]
})

export class UsersModule {};