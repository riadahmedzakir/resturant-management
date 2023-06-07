import { Injectable } from '@nestjs/common';
import { IGenericRepository } from '../concretes/database.service.interface';

@Injectable()
export class GenericRepository implements IGenericRepository {
  get: <Type>() => Type;
  insert: <Type>() => Type;
  update: <Type>() => Type;
  delete: <Type>() => Type;
}
