import { Injectable, Logger, } from '@nestjs/common'
import { HttpService, } from '@nestjs/axios'
import { UserData, } from './user_data'


@Injectable()
export class EntityService {
    constructor(private readonly httpService: HttpService) {}

    async createLead(userData: UserData) {
        return await this.httpService.post(`https://${userData.base_domain}/api/v4/leads`, [
            {
                name: 'сделка1',
            },
        ],
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userData.access_token}`,   
            },
        }).toPromise()
    }

    async createCompany(userData: UserData) {
        return await this.httpService.post(`https://${userData.base_domain}/api/v4/companies`, [
            {
                name: 'компания',
            },
        ],
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userData.access_token}`,   
            },
        }).toPromise()
    }

    async createContact(userData: UserData) {
        return await this.httpService.post(`https://${userData.base_domain}/api/v4/contacts`, [
            {
                name: 'контакт',
            },
        ],
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userData.access_token}`,   
            },
        }).toPromise()
    }
}
