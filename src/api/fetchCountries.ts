export const fetchCountries = async (): Promise<string[]> => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryNames = data.map((country: any) => country.name.common);
        const sortedCountries = countryNames.sort();
        return sortedCountries;
    } catch (error) {
        console.error('Error fetching countries:', error);
        return [];
    }
};
