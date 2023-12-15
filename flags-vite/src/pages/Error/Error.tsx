import {
  StyledContainer,
  StyledBackground,
  StyledContentBox,
  StyledH1,
  StyledH3,
  StyledLink,
} from './Error.styles';

type Props = {
  error: string;
};

function Error({ error }: Props) {
  return (
    <StyledContainer>
      <div>
        <StyledBackground>
          <StyledH1>{error}</StyledH1>
        </StyledBackground>

        <StyledContentBox>
          <StyledH3>Look like you're lost</StyledH3>

          <p>the page you are looking for not avaible!</p>

          <StyledLink to="/">Go to Home</StyledLink>
        </StyledContentBox>
      </div>
    </StyledContainer>
  );
}

export default Error;
