import { Module, } from '@nestjs/common'
import { EntityService, } from './entity.service'
import { EntityController, } from './entity.controller'
import { HttpModule, } from '@nestjs/axios'

@Module({
    imports: [ HttpModule, ],
    controllers: [ EntityController, ],
    providers: [ EntityService, ],
})
export class EntityModule {}
