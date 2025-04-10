import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesaService } from './mesa.service';
import { MesaController } from './mesa.controller';
import { Mesa } from './entities/mesa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mesa])],
  controllers: [MesaController],
  providers: [MesaService],
})
export class MesaModule {}
