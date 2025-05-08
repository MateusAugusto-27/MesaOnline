import { Entity, Column, PrimaryGeneratedColumn /*, OneToMany */ } from 'typeorm';
// import { Reserva } from '../../reserva/entities/reserva.entity';

@Entity()
export class Mesa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: number;

  @Column()
  capacidade: number;

  // Comentei isso até o Reserva existir
  // @OneToMany(() => Reserva, (reserva) => reserva.mesa)
  // reservas: Reserva[];
}

