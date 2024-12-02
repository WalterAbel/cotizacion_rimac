import { Body, Controller, Post } from '@nestjs/common';
import {
  CotizacionDto,
  CotizacionResponseDto,
} from 'src/academia/application/dtos/Cotizacion.dto';
import { CotizacionService } from 'src/academia/application/services/cotizacion.service';

@Controller('cotizacion')
export class CotizacionController {
  constructor(private readonly cotizacionService: CotizacionService) {
    console.log('CotizacionController created');
  }

  @Post('calcularCotizacion')
  async createCotizacion(
    @Body() cotizacion: CotizacionDto,
  ): Promise<CotizacionResponseDto> {
    try {
      console.log('Creating cotizacion', cotizacion);
      return this.cotizacionService.createCotizacion(cotizacion);
    } catch (error) {
      console.log('Error en el controller', error);
    }
  }
}
