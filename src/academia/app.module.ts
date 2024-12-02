import { Module } from '@nestjs/common';
import { CotizacionController } from './infrastructure/controllers/cotizacion.controller';
import { CotizacionService } from './application/services/cotizacion.service';
import { DynamoCotizacionRepository } from './infrastructure/repositories/cotizacion.repository';
import { CotizacionUseCase } from './application/use-cases/cotizacionUseCase';

@Module({
  imports: [],
  controllers: [CotizacionController],
  providers: [CotizacionService, CotizacionUseCase, DynamoCotizacionRepository],
})
export class AppModule {}
