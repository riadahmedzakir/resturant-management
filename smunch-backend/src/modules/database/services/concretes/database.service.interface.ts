interface IGenericRepositoryService {
  getMany: <T>(
    collectionName: string,
    query: string,
    sort: string,
    skip: number,
    limit: number,
  ) => Promise<T[]>;

  getOne: <T>(collectionName: string, query: string) => Promise<T>;

  insertOne: <T>(collectionName: string, data: T) => Promise<T>;

  updateOne: <T>(
    collectionName: string,
    query: string,
    data: string,
  ) => Promise<T>;

  delete: <T>(collectionName: string) => T;
}

export type { IGenericRepositoryService };
