import { BASE_URL } from './config';

const fetchData = async (endpoint: string) => {
    try {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Error fetching data from ${endpoint}`, err);
        throw err;
    }
};

export default fetchData;
