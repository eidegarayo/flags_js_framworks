import { Link } from 'react-router-dom';
import {
  StyledCountryCard,
  StyledCountryCardContend,
  StyledCountryCardName,
} from './CountryCard.styles';
import ImageLazy from '../ImageLazy';
import flagPlaceholder from '../../assets/flagPlaceholder.svg';
import type { Country } from '@/features/country/types/country.types';

type Props = {
  country: Country;
};

function CountryCard({ country }: Props) {
  return (
    <StyledCountryCard>
      <Link to={`/country/${country.cca3}`}>
        <StyledCountryCardContend>
          <ImageLazy
            source={country.flags.svg}
            alt={country.name.common}
            placeholderSrc={flagPlaceholder}
          />
          <StyledCountryCardName>{country.name.common}</StyledCountryCardName>
        </StyledCountryCardContend>
      </Link>
    </StyledCountryCard>
  );
}

export default CountryCard;
