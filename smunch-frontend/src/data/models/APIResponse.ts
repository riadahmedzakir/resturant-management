export interface APIResponse<T> {
    data?: T;
    error?: {
        detail: string;
        exceptionDetails: any[];
        status: number;
        title: string;
        traceId: string;
        type: string;
    };
}