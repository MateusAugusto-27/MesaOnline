import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MesaModule } from './mesa/mesa.module';
import { Mesa } from './mesa/entities/mesa.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'banco.sqlite',
      entities: [Mesa],
      synchronize: true,
    }),
    MesaModule,
  ],
})
export class AppModule {}

