interface IGenericRepositoryService {
  getMany: <T>(
    collectionName: string,
    query: string,
    sort: string,
    skip: number,
    limit: number,
  ) => Promise<T[]>;

  insertOne: <T>(collectionName: string, data: T) => Promise<T>;

  getOne: <T>(collectionName: string) => T;
  update: <T>(collectionName: string) => T;
  delete: <T>(collectionName: string) => T;
}

export type { IGenericRepositoryService };
