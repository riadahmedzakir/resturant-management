import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
class MongoDbService {
  _url = 'mongodb://127.0.0.1:27017';
  _dbName = 'smunch-96982fd3-5a8e-4775-9f14-4252a077d1a6';
  _db: any;

  async initializeDatabase() {
    if (!this._db) {
      console.warn('Trying to establish connection with the database');
      await this.connect();
      return;
    }

    return;
  }

  async getDb() {
    await this.initializeDatabase();
    return this._db;
  }

  private async connect() {
    const client = new MongoClient(this._url);
    await client.connect();
    console.log('Connected successfully to server');
    this._db = await client.db(this._dbName);
  }
}

const client = new MongoDbService();

export { client as MongoClient };
