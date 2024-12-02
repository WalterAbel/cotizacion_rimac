import { Injectable } from '@nestjs/common';
import { CotizacionUseCase } from '../use-cases/cotizacionUseCase';
import { CotizacionResponseDto } from '../dtos/Cotizacion.dto';

@Injectable()
export class CotizacionService {
  constructor(private readonly cotizacionUseCase: CotizacionUseCase) {}

  async createCotizacion(cotizacion): Promise<CotizacionResponseDto> {
    return this.cotizacionUseCase.create(cotizacion);
  }
}
