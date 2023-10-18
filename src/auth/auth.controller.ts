import { Controller, Get, HttpException, HttpStatus, } from '@nestjs/common'
import { AuthService, } from './auth.service'
import { AxiosError, } from 'axios'


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/')
    
    async auth() { 
        return await this.authService.getAuth()
            .then(res => res?.data)
            .catch(err => {
                console.log(err)
                const errorStatus = (err as AxiosError).response?.status
                const errorMsg = (err as AxiosError).message
                if (errorStatus) {
                    throw new HttpException(errorMsg, errorStatus)
                } else {
                    throw new HttpException(errorMsg, 500)
                }
            })
    }
}