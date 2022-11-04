import { PrismaClient } from '@prisma/client';
import { DatabaseClient } from '../../../domain/databaseClient';
import { prismaConfg } from './prismaConfig';

export class PrismaClientFactory implements DatabaseClient{
  prismaClient: PrismaClient;

  constructor() {
    this.prismaClient = new PrismaClient({...prismaConfg});
  }

  async connectDatabase() {
    try {
      console.info('conexion with database succesfully');
      await this.prismaClient.$connect();
    } catch (error) {
      console.error(error);
    }
  }

  getPrismaClient() {
    return this.prismaClient;
  }

  getClient() {
    return this.prismaClient;
  } 
}
