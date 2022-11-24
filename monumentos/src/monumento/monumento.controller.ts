import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { MonumentoService } from './monumento.service';
import { CreateMonumentoDto } from './dto/create-monumento.dto';

@Controller('monumento')
export class MonumentoController {
  constructor(private readonly monumentoService: MonumentoService) {}

  @Post()
  create(@Body() createMonumentoDto: CreateMonumentoDto) {
    return this.monumentoService.create(createMonumentoDto);
  }

  @Get()
  findAll() {
    return this.monumentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.monumentoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMonumentoDto: CreateMonumentoDto) {
    return this.monumentoService.update(+id, updateMonumentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.monumentoService.remove(+id);
  }
}
