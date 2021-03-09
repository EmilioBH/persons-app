const API_URL = 'https://restcountries.eu/rest/v2/region/europe'

export const serviceCountriesList = () => fetch(API_URL).then(response => response.json())