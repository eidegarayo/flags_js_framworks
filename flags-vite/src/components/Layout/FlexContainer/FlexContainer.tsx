import React from 'react';
import { StyledFlexContainer } from './FlexContainer.styles';

type Props = {
  children: React.ReactNode;
};

function FlexContainer({ children }: Props) {
  return <StyledFlexContainer>{children}</StyledFlexContainer>;
}

export default FlexContainer;
