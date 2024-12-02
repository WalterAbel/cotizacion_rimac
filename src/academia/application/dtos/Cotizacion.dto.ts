import { IsIn, IsNumber, IsString } from 'class-validator';

class DataDto {
  @IsNumber({}, { message: 'La cotizacion debe ser un numero' })
  cotizacion: number;

  @IsString({ message: 'La moneda debe ser un string' })
  moneda: string;

  @IsString({ message: 'El periodo debe ser un string' })
  periodo: string;

  @IsString({ message: 'La fecha de inicio de cobertura debe ser un string' })
  fechaInicioCobertura: string;
}

export class CotizacionDto {
  @IsNumber({}, { message: 'La edad debe ser un numero' })
  edad: number;

  @IsIn(['M', 'F'], { message: 'El genero debe ser M o F' })
  genero: string;

  @IsIn(['HIJOS', 'PADRES'], { message: 'El plan debe ser HIJOS o PADRES' })
  plan: string;

  @IsString({ message: 'tipoSeguro debe ser un string' })
  tipoSeguro: string;
}

export class CotizacionResponseDto {
  @IsNumber({}, { message: 'El status debe ser un numero' })
  status: number;

  @IsString({ message: 'El mensaje debe ser un string' })
  message: string;

  data: DataDto;
}
