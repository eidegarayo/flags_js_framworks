import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 0 1rem 1rem 1rem;

  @media screen and (min-width: 480px) {
    padding: 0 2rem 2rem 2rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0 3rem 3rem 3rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 4rem 4rem 4rem;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1440px;
    margin: 0 auto;
  }
`;

export const StyledH1 = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  margin: 2rem 0;
  font-size: 3rem;
`;
