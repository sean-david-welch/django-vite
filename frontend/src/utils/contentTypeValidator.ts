export const validateContentType = (
    contentType: string | null,
    endpoint: string
): void => {
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error(
            `Expected JSON data but received ${
                contentType || 'unknown content type'
            } from ${endpoint}`
        );
    }
};
