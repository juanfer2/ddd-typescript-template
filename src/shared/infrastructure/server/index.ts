import express from 'express';
import * as http from 'http';
import app from '../../app';
import { DatabaseClient } from '../../domain/databaseClient';
import { Server as ServerI } from '../../domain/server';
import { PrismaClientFactory } from '../persitence/prisma/prismaClientFactory';

export class ServerBackend implements ServerI {
  private express: express.Express;
  private port: string;
  private httpServer?: http.Server;
  private databaseClient: DatabaseClient;

  constructor(port: string) {
    this.port = port;
    this.express = app;
    this.databaseClient = new PrismaClientFactory();
  }

  async start(): Promise<void> {
    return new Promise(resolve => {
      try {
        this.connect().then

        this.express.get('/ping', async (req: any, res: any) => {
          res.send({ status: 'pong' });
        });

        this.express.get('/users', async (req: any, res: any) => {
          const { user } = this.databaseClient.getClient();
          /*
          const newUser = await user.create({
            data: {
              email: 'elsa@prisma.io',
              name: 'Elsa Prisma',
              lastName: 'last name',
              username: 'username',
              password: 'my password'
            },
          })
          */

          const users = await user.findMany();
          res.send({ users });
        });
        
        this.httpServer = this.express.listen(this.port, () => {
          console.log(
            `  Backend App is running at http://localhost:${this.port} in ${this.express.get('env')} mode`
          );
          console.log('Press CTRL-C to stop\n');
          resolve();
        });
      } catch (err) {
        console.error(err);
      }
    });
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }

  private async connect() {
    try {
      await this.databaseClient.connectDatabase();
    } catch (error) {
      console.log(error);
    }
  }
}
