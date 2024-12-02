import { Injectable } from '@nestjs/common';
import { CotizacionDto, CotizacionResponseDto } from '../dtos/Cotizacion.dto';
import {
  CalculadoraCotizacionHelper,
  FechaCoberturaHelper,
} from '../helpers/cotizacion.helper';
import { DynamoCotizacionRepository } from 'src/academia/infrastructure/repositories/cotizacion.repository';

@Injectable()
export class CotizacionUseCase {
  constructor(
    private readonly cotizacionRepository: DynamoCotizacionRepository,
  ) {}

  async create(payload: CotizacionDto): Promise<CotizacionResponseDto> {
    try {
      const { edad, genero, plan } = payload;

      const cotizacion = CalculadoraCotizacionHelper.calcularCotizacion(
        plan,
        genero,
        edad,
      );
      const fechaInicioCobertura = FechaCoberturaHelper.obtenerFechaCobertura();
      await this.cotizacionRepository.createCotizacion(payload);
      return {
        status: 200,
        message: 'Cotización calculada correctamente',
        data: {
          cotizacion: cotizacion,
          moneda: 'PEN',
          periodo: 'mes',
          fechaInicioCobertura: fechaInicioCobertura,
        },
      };
    } catch {
      return {
        status: 500,
        message: 'Error al calcular la cotización',
        data: {
          cotizacion: 0,
          moneda: 'PEN',
          periodo: 'mes',
          fechaInicioCobertura: '',
        },
      };
    }
  }
}
