import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './Users.service';
import { UsersDto } from './dto/Users';

@Controller('Users')
export class UsersController{
    constructor(private service: UsersService) { }
    @Post()
    new_user(@Body() dto: UsersDto){
        return this.service.new_user(dto)
    }
}