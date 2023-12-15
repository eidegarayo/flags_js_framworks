import type { CountryDetail } from '@/types/country.types';

export interface StyledCountryInfoProps {}

interface OptionalCountryInfoProps {}

export interface DefaultProps
  extends StyledCountryInfoProps,
    OptionalCountryInfoProps {}

export interface CountryInfoProps extends Partial<DefaultProps> {
  country: CountryDetail;
}
