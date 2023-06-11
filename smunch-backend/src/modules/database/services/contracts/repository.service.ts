import { Injectable } from '@nestjs/common';
import { IGenericRepositoryService } from '../concretes/database.service.interface';
import { MongoClient } from './database.mongodb.service';

@Injectable()
export class GenericRepositoryService implements IGenericRepositoryService {
  getOne: <T>(collectionName: string) => T;
  update: <T>(collectionName: string) => T;
  delete: <T>(collectionName: string) => T;

  async getMany<T>(
    collectionName: string,
    query = `{}`,
    sort = `{ "_id" : 1 }`,
    skip = 0,
    limit = 10,
  ): Promise<T[]> {
    const db = await MongoClient.getDb();

    const response = await db
      .collection(collectionName)
      .find(JSON.parse(query))
      .sort(JSON.parse(sort))
      .skip(skip)
      .limit(limit)
      .toArray();

    return response;
  }

  async insertOne<T>(collectionName: string, data: T): Promise<T> {
    const db = await MongoClient.getDb();

    const response = await db.collection(collectionName).insertOne(data);

    return response;
  }
}
