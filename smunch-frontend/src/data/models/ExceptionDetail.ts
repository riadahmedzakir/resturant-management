import { StackFrame } from "./StackFrame";

export interface ExceptionDetail {
    message: string;
    type: string;
    raw: string;
    stackFrames: StackFrame[];
}
