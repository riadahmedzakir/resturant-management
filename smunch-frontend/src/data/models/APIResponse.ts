export interface CommonQueryResponse<T> {
    IsScuessful: boolean;
    StatusCode: number;
    SuccessResponse: T
}
export interface APIResponse<T> {
    data?: CommonQueryResponse<T>;
    error?: {
        detail: string;
        exceptionDetails: any[];
        status: number;
        title: string;
        traceId: string;
        type: string;
    };
}