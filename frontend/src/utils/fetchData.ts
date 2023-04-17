// fetchData.ts
import { BASE_URL } from './config';
import { FetchDataOptions } from '../types/Types';
import { buildRequestOptions } from './requestOptions';
import { validateContentType } from './contentTypeValidator';

const fetchData = async (endpoint: string, options?: FetchDataOptions) => {
    try {
        const requestOptions = buildRequestOptions(options);
        const response = await fetch(`${BASE_URL}${endpoint}`, requestOptions);

        validateContentType(response.headers.get('content-type'), endpoint);

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
