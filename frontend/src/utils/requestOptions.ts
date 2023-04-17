import { FetchDataOptions } from '../types/Types';

export const buildRequestOptions = (
    options?: FetchDataOptions
): RequestInit => ({
    headers: {
        Accept: 'application/json',
        ...options?.headers,
    },
    ...options,
});
