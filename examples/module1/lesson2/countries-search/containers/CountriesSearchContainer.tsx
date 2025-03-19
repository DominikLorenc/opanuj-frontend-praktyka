import { useEffect, useState } from 'react';
import httpClient from '../utlils/httpClient';
import type { Country, FilterType, SortOrder } from '../types';
import Card from '../components/Card';

const filterOptions: Array<{ value: FilterType; label: string }> = [
  { value: 'name', label: 'Name' },
  { value: 'currency', label: 'Currency' },
  { value: 'language', label: 'Language' },
  { value: 'capital', label: 'Capital' },
];

const sortOptions: Array<{ value: SortOrder; label: string }> = [
  { value: 'alphabetical', label: 'Alphabetical' },
  { value: 'population', label: 'Population' },
];

const CountriesSearchContainer = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filter, setFilter] = useState<FilterType>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const test = {
    default: httpClient.getAllCountries,
    // name: httpClient.getCountriesByName('Poland'),
    // currency: httpClient.getCountriesByCurrency('PLN'),
    // language: httpClient.getCountriesByLanguage('pl'),
    capital: httpClient.getCountriesByCapital,
  };

  useEffect(() => {
    console.log(filter, searchTerm);
    const getCountries = async () => {
      const fetchFn =
        searchTerm === '' ? test.default : test[filter as keyof typeof test];

      console.log(fetchFn);
      const response = await fetchFn(searchTerm);

      if (response) {
        setCountries(response);
      }
    };

    getCountries();
  }, [searchTerm, filter]);

  const handleSort = () => {
    if (countries.length === 0) return [];

    const sortedCountries = [...countries].sort((a, b) => {
      if (sortOrder === 'alphabetical') {
        return a.name.common.localeCompare(b.name.common);
      } else if (sortOrder === 'population') {
        return (b.population || 0) - (a.population || 0);
      }
      return 0;
    });

    setCountries(sortedCountries);
  };

  useEffect(() => {
    handleSort();
  }, [sortOrder]);

  const placeholderText = `Search countries by ${filter}`;

  return (
    <main className="container mx-auto py-4">
      <h1 className="text-4xl font-bold">Countries Search</h1>
      <input
        type="text"
        placeholder={placeholderText}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md w-full"
      />
      <div className="flex flex-row gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
          className="border p-2"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="border p-2"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country) => (
          <Card {...country} key={country.cca3} />
        ))}
      </div>
    </main>
  );
};

export default CountriesSearchContainer;
