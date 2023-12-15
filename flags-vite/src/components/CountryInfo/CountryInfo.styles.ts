import styled from 'styled-components';
import { StyledCountryInfoProps } from './CountryInfo.types';

const StyledCountryInfo = styled.div<StyledCountryInfoProps>`
  background-color: ${({ theme }) => theme.colors.backgroundDark};
  padding: 1rem;
  flex-grow: 1;
`;

export default StyledCountryInfo;
