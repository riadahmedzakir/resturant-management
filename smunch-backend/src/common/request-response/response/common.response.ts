class CommonQueryResponse<Type> {
  IsScuessful: boolean;
  SuccessResponse: Type;
  StatusCode: number;
}

class CommonCommandResponse<Type> {
  IsScuessful: boolean;
  SuccessResponse: Type;
  StatusCode: number;
  Erros: string[];
}

export { CommonQueryResponse, CommonCommandResponse };
