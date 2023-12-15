import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.main`
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const StyledBackground = styled.div`
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
`;

export const StyledH1 = styled.h1`
  font-size: 80px;
`;

export const StyledContentBox = styled.div`
  margin-top: -50px;
`;

export const StyledH3 = styled.h3`
  font-size: 80px;
`;

export const StyledLink = styled(Link)`
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
`;
