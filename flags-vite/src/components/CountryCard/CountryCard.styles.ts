import styled from 'styled-components';

export const StyledCountryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: ${({ theme }) => theme.transition};

  min-height: 90px;

  &:hover {
    box-shadow: ${({ theme }) => theme.hoverShadow};
    transform: ${({ theme }) => theme.hoverTransform};
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
  }
`;

export const StyledCountryCardContend = styled.div`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
`;

export const StyledCountryCardName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.007em;
`;

export const StyledCountryCardImage = styled.img`
  max-width: 100%;
  border: 1px solid #6e6e735e;
`;
