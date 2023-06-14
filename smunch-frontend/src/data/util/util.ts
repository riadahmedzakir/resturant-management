export const jsonPayloadFormatter = (payload: unknown): string => JSON.stringify(payload);

export const headerContentTypeForJson = (): Headers => new Headers({ 'Content-Type': 'application/json' });

export const getRatingValue = (rating: string) => {
    if (!rating) { return 0; }
    const valueFromString = rating.split("/")[0];
    const result = parseInt(valueFromString);
    return result;
}