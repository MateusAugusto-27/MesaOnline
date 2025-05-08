import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from './entities/mesa.entity';
import { CreateMesaDto } from './dto/create-mesa.dto';

@Injectable()
export class MesaService {
  constructor(
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  create(createMesaDto: CreateMesaDto): Promise<Mesa> {
    const mesa = this.mesaRepository.create(createMesaDto);
    return this.mesaRepository.save(mesa);
  }

  findAll(): Promise<Mesa[]> {
    return this.mesaRepository.find();
  }

  findOne(id: number): Promise<Mesa | null> {
    return this.mesaRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.mesaRepository.delete(id);
  }
}

