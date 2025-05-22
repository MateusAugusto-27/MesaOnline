import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { MesaService } from './mesa.service';
import { CreateMesaDto } from './dto/create-mesa.dto';

@Controller('mesas')
export class MesaController {
  constructor(private readonly mesaService: MesaService) {}

  @Get()
  findAll() {
    return this.mesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesaService.findOne(+id);
  }

  @Post()
  create(@Body() createMesaDto: CreateMesaDto) {
    return this.mesaService.create(createMesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesaService.remove(+id);
  }
}

