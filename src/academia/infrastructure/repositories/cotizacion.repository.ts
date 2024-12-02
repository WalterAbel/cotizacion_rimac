import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';
import { CotizacionDto } from 'src/academia/application/dtos/Cotizacion.dto';
import { CotizacionRepository } from 'src/academia/domain/repositories/cotizacionRepository';
import { v4 as uuidv4 } from 'uuid';

export class DynamoCotizacionRepository implements CotizacionRepository {
  private readonly dynamoDb: DynamoDBDocumentClient;
  private readonly tableName: string;
  constructor() {
    const client = new DynamoDBClient();
    this.dynamoDb = DynamoDBDocumentClient.from(client);
    this.tableName = process.env.DYNAMODB_TABLE!;
  }

  async createCotizacion(cotizacion: CotizacionDto): Promise<void> {
    try {
      const id = uuidv4();

      const params = {
        TableName: this.tableName,
        Item: { id, ...cotizacion },
      };
      await this.dynamoDb.send(new PutCommand(params));
    } catch (error) {
      console.error('Error al calcular la cotización', error);
      throw new Error('Error al calcular la cotización');
    }
  }
  async getCotizacion(): Promise<CotizacionDto[]> {
    throw new Error('Method not implemented.');
  }
}
