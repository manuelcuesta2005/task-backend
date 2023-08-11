import { Body, Controller, Post, Get } from '@nestjs/common';
import { Users } from './models/Users';
import { UsersService } from './Users.service';
import { UsersDto } from './dto/Users';
import { UserloginDto } from './dto/user-login-dto';
import { error } from 'console';

@Controller('users')
export class UsersController{
    constructor(private service: UsersService) { }
   
    @Get()
    getAllUsers(){
        return this.service.getAllUsers();
    }

    @Post()
    new_user(@Body() dto: UsersDto){
        return this.service.new_user(dto)
    }
    @Post("/login")
    login(@Body() login: UserloginDto): Promise<Users | any> {
        return this.service.queryLogin(login).catch((error)=>{console.log(error)})
    }
}