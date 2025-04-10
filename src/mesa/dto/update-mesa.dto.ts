import { PartialType } from '@nestjs/mapped-types';
import { CreateMesaDto } from './create-mesa.dto';

export class UpdateMesaDto extends PartialType(CreateMesaDto) {
  tempoOcupado?: number;
  ocupadaDesde?: Date;
}

