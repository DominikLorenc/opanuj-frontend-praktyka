import type { Country } from '../types';


const BASE_URL = 'https://restcountries.com/v3.1';

const httpClient = {
    getAllCountries: async () => {
        try {
            const response: Response = await fetch(`${BASE_URL}/all`);
            const data: Country[] = await response.json();

            if (!response.ok) {
                throw new Error('Failed to fetch countries.');
            }

            if (data.length === 0) {
                throw new Error('No countries found.');
            }

            return data;
        } catch (error) {
            console.log(error);
        }
    },
    getCountriesByCapital: async (capital: string) => {
        try {
            const response: Response = await fetch(`${BASE_URL}/capital/${capital}`);

            if (!response.ok) {
                throw new Error(
                    'Failed to fetch countries by capital.',
                );
            }

            const data: Country[] = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    },
};

export default httpClient;