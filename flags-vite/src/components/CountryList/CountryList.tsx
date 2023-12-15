import CountryCard from '@/components/CountryCard';
import { StyledCountryList } from './CountryList.styles';
import type { Country } from '@/features/country/types/country.types';

type Props = {
  countries: Country[];
};

function CountryList({ countries }: Props) {
  return (
    <>
      <StyledCountryList>
        {countries.map((country: Country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </StyledCountryList>
    </>
  );
}

export default CountryList;
