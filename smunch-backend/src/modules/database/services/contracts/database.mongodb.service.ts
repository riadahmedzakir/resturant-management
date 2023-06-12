import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { DATABASE_CONFIGURATION } from '../../config/database.constant';

@Injectable()
class MongoDbService {
  _url = DATABASE_CONFIGURATION.Url;
  _dbName = DATABASE_CONFIGURATION.DatabaseName;
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
