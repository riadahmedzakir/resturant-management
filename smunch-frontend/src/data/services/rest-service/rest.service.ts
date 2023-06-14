import { APIResponse } from "../../models/APIResponse";
import { GenerateError } from "../../models/GenerateError";
import { RestMethods } from "../../models/RestMethods";

export const FetchApi = async <T>(url: string, method: RestMethods, init?: RequestInit): Promise<APIResponse<T>> => {
    return window
        .fetch(`${`http://localhost:3001/`}${url}`, { method, ...init, })
        .then(async (response) => {

            if (response.ok || response.status < 400) {
                const json = await response.json();
                return { data: json };
            }

            const json = await response.json();
            return Promise.resolve({ error: json });
        })
        .catch((response) => {
            const error = new GenerateError({ ...response });
            return Promise.resolve({ error });
        });
};