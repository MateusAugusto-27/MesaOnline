import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from './entities/mesa.entity';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  create(createMesaDto: CreateMesaDto): Promise<Mesa> {
    const novaMesa = this.mesaRepository.create(createMesaDto);
    return this.mesaRepository.save(novaMesa);
  }

  findAll(): Promise<Mesa[]> {
    return this.mesaRepository.find();
  }

  async findOne(id: number): Promise<Mesa> {
    const mesa = await this.mesaRepository.findOneBy({ id });
    if (!mesa) {
      throw new NotFoundException(`Mesa com id ${id} não encontrada`);
    }
    return mesa;
  }

  async update(id: number, updateMesaDto: UpdateMesaDto): Promise<Mesa> {
    await this.mesaRepository.update(id, updateMesaDto);
    return this.findOne(id); // já trata erro se não encontrar
  }

  async remove(id: number): Promise<void> {
    await this.mesaRepository.delete(id);
  }
}
