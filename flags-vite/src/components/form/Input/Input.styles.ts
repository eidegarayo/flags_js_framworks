import styled from 'styled-components';
import { StyledInputProps } from './Input.types';

const StyledInput = styled.input<StyledInputProps>`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
`;

export default StyledInput;
