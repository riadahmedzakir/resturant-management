import { Injectable } from '@nestjs/common';
import { IGenericRepositoryService } from '../concretes/database.service.interface';
import { MongoClient } from './database.mongodb.service';

@Injectable()
export class GenericRepositoryService implements IGenericRepositoryService {
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

  async getOne<T>(collectionName: string, query = '{}'): Promise<T> {
    const db = await MongoClient.getDb();

    const response = await db
      .collection(collectionName)
      .findOne(JSON.parse(query));

    return response;
  }

  async insertOne<T>(collectionName: string, data: T): Promise<T> {
    const db = await MongoClient.getDb();

    const response = await db.collection(collectionName).insertOne(data);

    return response;
  }

  async updateOne<T>(
    collectionName: string,
    query: string,
    data: string,
  ): Promise<T> {
    const db = await MongoClient.getDb();

    const response = await db
      .collection(collectionName)
      .updateOne(JSON.parse(query), { $set: JSON.parse(data) });

    return response;
  }
}
