import { Injectable, } from '@nestjs/common'
import { HttpService, } from '@nestjs/axios'
import { AxiosResponse, } from 'axios'
import type authResponse from './auth'


@Injectable()
export class AuthService {
    constructor(private readonly httpService: HttpService) {}

    async getAuth() {
        return await this.httpService.get<authResponse>('https://test.gnzs.ru/oauth/get-token.php', {
            headers: {
                'Content-Type': 'application/json',
                'X-Client-Id': '31334466',   
            },
        }).toPromise()
    }
}
