import { TGetPlaceholderDataApi } from './getPlaceholderData';

export const getPlaceholderDataISR = async ({
    id,
    maxRetries = 2,
    retryDelay = 3000
}: {
    id?: number;

    maxRetries?: number;
    retryDelay?: number;
}): Promise<TGetPlaceholderDataApi[]> => {
    let lastError: unknown;
    let attempt = 0;

    while (attempt < maxRetries) {
        attempt++;
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        try {
            console.log(id);
            
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_ULR ?? ''}/posts`,
                {
                    method: 'GET',
                    next: { revalidate: 60 },
                    headers: new Headers({
                        'content-type': 'application/json'
                    }),
                    signal: controller.signal
                }
            );
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = (await response.json()) as TGetPlaceholderDataApi[];
            return data;
        } catch (error) {
            clearTimeout(timeoutId);
            lastError = error;
            if (
                (error as Error).name !== 'AbortError' ||
                attempt === maxRetries
            ) {
                throw error;
            }
            await new Promise(resolve => setTimeout(resolve, retryDelay));
        }
    }

    throw lastError;
};
