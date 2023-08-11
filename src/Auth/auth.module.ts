import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "src/Users/models/Users";
import { UsersService } from "src/Users/Users.service";
import { AuthController } from "./auth.controller";

@Module({
    imports: [SequelizeModule.forFeature([Users])],
    controllers: [AuthController],
    providers: [UsersService]
})

export class AuthModule {}