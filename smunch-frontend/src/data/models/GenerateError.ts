import { ExceptionDetail } from "./ExceptionDetail";

export class GenerateError {
    type: string;
    title: string;
    status: number;
    detail: string;
    exceptionDetails: ExceptionDetail[];
    traceId: string;

    constructor(props: GenerateError) {
        this.detail = props.detail;
        this.exceptionDetails = props.exceptionDetails;
        this.status = props.status;
        this.title = props.title;
        this.traceId = props.traceId;
        this.type = props.type;
    }
}
