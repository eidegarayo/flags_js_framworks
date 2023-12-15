import styled from 'styled-components';

export const StyledCountryList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 480px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
