import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mesa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column()
  status: 'disponivel' | 'ocupada';

  @Column()
  capacidade: number;

  @Column({ default: 0 })
  tempoOcupado: number; // tempo em minutos

  @Column({ type: 'timestamp', nullable: true })
  ocupadaDesde: Date;
}
