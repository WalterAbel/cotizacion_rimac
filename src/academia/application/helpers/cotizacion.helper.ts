export class TarifaHelper {
  static obtenerTarifaBase(plan: string, genero: string): number {
    const tarifas = {
      HIJOS: { M: 100, F: 120 },
      PADRES: { M: 200, F: 220 },
    };

    if (!tarifas[plan] || tarifas[plan][genero] === undefined) {
      throw new Error('Plan o género no válido');
    }

    return tarifas[plan][genero];
  }
}
export class EdadHelper {
  static obtenerFactorEdad(edad: number): number {
    if (edad < 18) return 0.8;
    if (edad < 40) return 1.0;
    if (edad < 60) return 1.2;
    return 1.5;
  }
}

export class CalculadoraCotizacionHelper {
  static calcularCotizacion(
    plan: string,
    genero: string,
    edad: number,
  ): number {
    const tarifaBase = TarifaHelper.obtenerTarifaBase(plan, genero);
    const factorEdad = EdadHelper.obtenerFactorEdad(edad);

    return tarifaBase * factorEdad;
  }
}

export class FechaCoberturaHelper {
  static obtenerFechaCobertura(): string {
    const hoy = new Date();
    const siguienteMes = hoy.getMonth() + 1;
    const año = hoy.getFullYear();
    const primerDiaDelMes = new Date(año, siguienteMes, 1);
    return primerDiaDelMes.toISOString().split('T')[0];
  }
}
