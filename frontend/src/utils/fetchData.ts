import { BASE_URL } from './config';

const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            headers: {
                Accept: 'application/json',
            },
        });

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
