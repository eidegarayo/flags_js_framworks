import { Link, useParams } from 'react-router-dom';

import Map from '@/components/Map';
import CountryInfo from '@/components/CountryInfo';
import FlexContainer from '@/components/Layout/FlexContainer';
import { useGetCountryQuery } from '@/features/country/api/country';
import { StyledMain, StyledH1 } from '@/components/Layout/Layout.styles';

type Params = {
  countryId: string;
};

function Country() {
  const { countryId } = useParams<keyof Params>() as Params;
  const { data: country, isLoading, isError } = useGetCountryQuery(countryId);

  if (isError) return <h2>Ups! Error</h2>;

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <StyledMain>
      <StyledH1>{country.name.common}</StyledH1>
      <Link to="/countries">Return to countries</Link>
      <FlexContainer>
        <Map latlng={country.latlng} />
        <CountryInfo country={country} />
      </FlexContainer>
    </StyledMain>
  );
}

export default Country;
