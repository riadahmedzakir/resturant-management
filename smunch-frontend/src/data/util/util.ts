export const jsonPayloadFormatter = (payload: unknown): string => JSON.stringify(payload);

export const headerContentTypeForJson = (): Headers => new Headers({ 'Content-Type': 'application/json' });