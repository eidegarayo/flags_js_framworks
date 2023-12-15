import { useMemo, useState } from 'react';

import CountryList from '@/components/CountryList/CountryList';
import Input from '@/components/form/Input';

import { useGetCountriesQuery } from '@/features/country/api/country';
import { COUNTRY_QUERIES } from '@/constants/api.constants';

import { StyledMain, StyledH1 } from '@/components/Layout/Layout.styles';
import { Country } from '@/features/country/types/country.types';

function Countries() {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const {
    data: countries,
    isError,
    isLoading,
  } = useGetCountriesQuery(COUNTRY_QUERIES.LIST);

  const countriesView: Country[] = useMemo(() => {
    if (!countries) return [];

    return countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, countries]);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError || !countries) return <h2>Ups! Error</h2>;

  return (
    <StyledMain>
      <StyledH1>Countries</StyledH1>
      <label htmlFor="search">Search:</label>
      <Input
        title="search for countries"
        ariaLabel="Enter your search term"
        type="search"
        role="searchbox"
        id="search"
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
      <CountryList countries={countriesView} />
    </StyledMain>
  );
}

export default Countries;
