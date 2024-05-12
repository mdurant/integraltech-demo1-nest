import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { NamesService } from './names.service';
import { ApiBody, ApiOperation, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/names')
@ApiTags('Api Names')
export class NamesController {

    constructor( private namesService: NamesService) {
        console.log('NamesController instantiated');
    }

    @Post()
    @ApiBody({ description: 'Añadir un nombre', examples: { 'Ej.1': { value: { name: 'Jose'}}, 'Ej.2': { value: { name: 'Maria'}}} })
    @ApiOperation({description: 'Create a new name'})
    createName(@Body() data: {name: string}){
        return this.namesService.createName(data.name);
    }

    @Get()
    @ApiOperation({description: 'Get all names'})
    @ApiQuery({name: 'filter', type: 'string', required: false, description: 'Filter by name'})
    getNames(@Query() query:any){
        console.log('query', query);
        return this.namesService.getNames();
    }

    @Put('/:name/:newName')
    @ApiParam({name: 'name', type: 'string', description: 'Name to update'})
    updateName(@Param('name') name: string, @Param('newName') newName: string){
        return this.namesService.updateName(name, newName);
    }

    @Delete('clear')
    clearNames(){
        return this.namesService.clearNames();
    }

    @Delete('/:name')
    deleteName(@Param('name') name: string){
        return this.namesService.deleteName(name);
    }
}
