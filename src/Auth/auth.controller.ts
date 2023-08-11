import { Body, Controller, Post } from "@nestjs/common";
import { UsersService } from "src/Users/Users.service";
import { AuthDto } from "./dto/auth-dto";


@Controller('auth')
export class AuthController {
    constructor(private Userservice: UsersService) { }
    
    @Post('login')
    async login(@Body() authDto: AuthDto): Promise<any>{
        return this.Userservice.queryLogin(authDto)
    }
}