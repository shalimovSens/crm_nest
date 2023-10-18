import { Module, } from '@nestjs/common'

import { AuthModule, } from './auth/auth.module'
import { EntityModule, } from './entity/entity.module'


@Module({
    imports: [ 
        AuthModule, 
        EntityModule,
    ],
    controllers: [ ],
    providers: [ ],
})
export class AppModule {}
