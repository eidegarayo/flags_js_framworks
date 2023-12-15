import styled from 'styled-components';
import { StyledMapProps } from './Map.types';

const StyledMap = styled.div<StyledMapProps>`
  padding: "1rem",
  flexBasis: "250px",
  height: "100%",
  overflow: "auto",
`;

export default StyledMap;
