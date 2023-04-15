import { BASE_URL } from './config';

// Add this interface before the fetchData function
interface FetchDataOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

const fetchData = async (endpoint: string, options?: FetchDataOptions) => {
    try {
        const requestOptions: RequestInit = {
            headers: {
                Accept: 'application/json',
                ...options?.headers,
            },
            ...options,
        };

        const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(
                `Expected JSON data but received ${
                    contentType || 'unknown content type'
                } from ${endpoint}`
            );
        }

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message);
        }

        return data;
    } catch (err) {
        console.error(`Error fetching data from ${endpoint}`, err);
        throw err;
    }
};

export default fetchData;
