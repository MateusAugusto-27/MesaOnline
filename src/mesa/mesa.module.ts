import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mesa } from './entities/mesa.entity';
import { MesaService } from './mesa.service';
import { MesaController } from './mesa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Mesa])],
  controllers: [MesaController],
  providers: [MesaService],
})
export class MesaModule {}

