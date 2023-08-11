import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "src/Users/models/Users";


@Injectable()
export class AuthService{
    constructor(
        @InjectModel(Users)
        private readonly users : typeof Users) {}
}