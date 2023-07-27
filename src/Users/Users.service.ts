import { UsersDto } from './dto/Users';
import { Users } from './models/Users';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthDto } from 'src/authentication/dto/auth-dto';

var md5 = require('md5')
@Injectable()
export class UsersService{

    constructor(
        @InjectModel(Users)
        private readonly UsersModel: typeof Users,
        private jwtService: JwtService) { }

        new_user(dto: UsersDto): Promise<Users>{
            return this.UsersModel.create({
                full_name: dto.full_name,
                identification: dto.identification,
                email: dto.email,
                password: md5(dto.password)
            })
        }

        async queryLogin(authDto: AuthDto) {
            const User = await this.UsersModel.findOne({
                where: {
                    email: authDto.email,
                    password: md5(authDto.password)
                }
            })
    
            if (User === undefined) {
                throw new UnauthorizedException();
            }
            const payload = { sub: User.full_name, correo: User.email, rol: "ADMIN" };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
}