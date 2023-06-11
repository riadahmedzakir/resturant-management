class CommonQueryResponse<T> {
  IsScuessful: boolean;
  SuccessResponse: T;
  StatusCode: number;
}

class CommonCommandResponse<T> {
  IsScuessful: boolean;
  SuccessResponse: T;
  StatusCode: number;
  Erros: string[];
}

export { CommonQueryResponse, CommonCommandResponse };
