import { Users } from './models/Users';
import { UsersDto } from './dto/Users';
import { UserloginDto } from './dto/user-login-dto';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable } from '@nestjs/common';

var md5 = require('md5')
@Injectable()
export class UsersService{

    constructor(
        @InjectModel(Users)
        private readonly UsersModel: typeof Users) { }

        new_user(dto: UsersDto): Promise<Users>{
            return this.UsersModel.create({
                full_name: dto.full_name,
                identification: dto.identification,
                email: dto.email,
                password: md5(dto.password)
            })
        }

        getAllUsers():Promise<Users[]> {
            return this.UsersModel.findAll();
        }

        async queryLogin(dto: UserloginDto): Promise<Users | any> {
            let  user =  await this.UsersModel.findOne({ where: { email: dto.email, password: dto.password }, attributes: ['name', 'lastName'] });
            if(user === null ){
                return {"message":"No existe el usuario"}
            }else{
                return user
            }
        }
        
}