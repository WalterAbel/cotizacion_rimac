import { Test, TestingModule } from '@nestjs/testing';
import { CotizacionResponseDto } from 'src/academia/application/dtos/Cotizacion.dto';
import { CotizacionService } from 'src/academia/application/services/cotizacion.service';
import { CotizacionUseCase } from 'src/academia/application/use-cases/cotizacionUseCase';

describe('CotizacionService', () => {
  let service: CotizacionService;
  let useCase: CotizacionUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CotizacionService,
        {
          provide: CotizacionUseCase,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CotizacionService>(CotizacionService);
    useCase = module.get<CotizacionUseCase>(CotizacionUseCase);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call create method of CotizacionUseCase', async () => {
    const cotizacion = {
      edad: 45,
      genero: 'M',
      plan: 'HIJOS',
      tipoSeguro: 'salud',
    };
    const response: CotizacionResponseDto = {
      status: 200,
      message: 'Cotización calculada correctamente',
      data: {
        cotizacion: 120,
        moneda: 'PEN',
        periodo: 'mes',
        fechaInicioCobertura: '2024-12-01',
      },
    };
    jest.spyOn(useCase, 'create').mockResolvedValue(response);

    const result = await service.createCotizacion(cotizacion);

    expect(useCase.create).toHaveBeenCalledWith(cotizacion);
    expect(result).toEqual(response);
  });
});
