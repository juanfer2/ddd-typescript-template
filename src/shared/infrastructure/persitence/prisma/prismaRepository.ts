import { Repository } from '../../../domain';

export default class PrismaRepository implements Repository {
  persist(data: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
