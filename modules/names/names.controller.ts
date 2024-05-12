import {Body, Controller, Post} from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('api/v1/names')
export class NamesController {

    constructor( private namesService: NamesService) {
        console.log('NamesController instantiated');
    }

    @Post()
    createName(@Body() data: {name: string}){
        return this.namesService.createName(data.name);
    }
}
