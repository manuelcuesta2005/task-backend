import { Users } from './models/Users';
import { UsersDto } from './dto/Users';
import { UserloginDto } from './dto/user-login-dto';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService{

    constructor(
        @InjectModel(Users)
        private readonly UsersModel: typeof Users,
        private jwtservice: JwtService) { }

        async new_user(dto: UsersDto): Promise<Users>{
            return this.UsersModel.create({
                full_name: dto.full_name,
                identification: dto.identification,
                email: dto.email,
                password: dto.password
            }).then((response) => response).catch((error) => error);
        }

        async getAllUsers():Promise<Users[]> {
            return this.UsersModel.findAll();
        }

        async queryLogin(dto: UserloginDto): Promise<Users | any> {
            const user = await this.UsersModel.findOne({
                where: {
                    email: dto.email,
                    password: dto.password
                }
            })
            if(user === undefined){
                throw new UnauthorizedException();
            }
            const payload = {sub: user.full_name, email: user.email}
            return{
                access_token: await this.jwtservice.signAsync(payload)
            }
        }
        
}