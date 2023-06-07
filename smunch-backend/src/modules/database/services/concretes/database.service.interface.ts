interface IGenericRepository {
  get: <Type>() => Type;
  insert: <Type>() => Type;
  update: <Type>() => Type;
  delete: <Type>() => Type;
}

export type { IGenericRepository };
