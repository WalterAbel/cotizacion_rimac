export interface CotizacionRepository {
  createCotizacion(cotizacion: any): Promise<any>;
}
