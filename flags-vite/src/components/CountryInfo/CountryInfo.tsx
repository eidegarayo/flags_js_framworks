import StyledCountryInfo from './CountryInfo.styles';
import { CountryInfoProps } from './CountryInfo.types';

function CountryInfo({ country }: CountryInfoProps) {
  const lang = Object.keys(country.languages)[0];
  const languages = Object.values(country.languages).join(', ');

  return (
    <StyledCountryInfo>
      <h2>
        {country.flag} {country.name.common}
      </h2>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
      <h3>Native Name:</h3>
      <p>{country.name.nativeName[lang].common}</p>
      <h3>Languages:</h3>
      <p>{languages}</p>
      <h3>Official Name:</h3>
      <p>{country.name.official}</p>
    </StyledCountryInfo>
  );
}

export default CountryInfo;
