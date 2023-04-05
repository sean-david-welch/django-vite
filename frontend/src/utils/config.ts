export const BASE_URL =
    typeof process !== 'undefined' && process.env.REACT_APP_BASE_URL
        ? process.env.REACT_APP_BASE_URL
        : 'http://127.0.0.1:8000';
