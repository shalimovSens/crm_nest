import { Body, Controller, HttpException, Post, } from '@nestjs/common'
import { AxiosError, } from 'axios'
import { EntityService, } from './entity.service'
import { UserData, } from './user_data'

@Controller('/entity')
export class EntityController {
    constructor(private readonly entityService: EntityService) {}

    @Post('/lead')
    async createLead(@Body() userData: UserData) {
        if (!(userData.access_token && userData.base_domain)) throw new HttpException('Bad request', 400)

        return await this.entityService.createLead(userData)
            .then(res => res?.data._embedded.leads[0].id)
            .catch(err => {
                const errorStatus = (err as AxiosError).response?.status
                const errorMsg = (err as AxiosError).message
                if (errorStatus) {
                    throw new HttpException(errorMsg, errorStatus)
                } else {
                    throw new HttpException(errorMsg, 500)
                }
            })
    }

    @Post('/company')
    async createCompany(@Body() userData: UserData) {
        if (!(userData.access_token && userData.base_domain)) throw new HttpException('Bad request', 400)

        return await this.entityService.createLead(userData)
            .then(res => res?.data._embedded.leads[0].id)
            .catch(err => {
                const errorStatus = (err as AxiosError).response?.status
                const errorMsg = (err as AxiosError).message
                if (errorStatus) {
                    throw new HttpException(errorMsg, errorStatus)
                } else {
                    throw new HttpException(errorMsg, 500)
                }
            })
    }

    @Post('/contact')
    async createContact(@Body() userData: UserData) {
        if (!(userData.access_token && userData.base_domain)) throw new HttpException('Bad request', 400)

        return await this.entityService.createLead(userData)
            .then(res => res?.data._embedded.leads[0].id)
            .catch(err => {
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