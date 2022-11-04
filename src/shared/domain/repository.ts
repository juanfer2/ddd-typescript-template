export interface Repository {
  persist(data: any): Promise<any>
}
