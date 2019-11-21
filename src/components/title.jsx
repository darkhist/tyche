import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: 2em;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 4em;
  }

  font-size: 3em;
  margin: 0.25em auto 0 auto;
  text-align: center;
`;

const Title = () => <StyledTitle> T </StyledTitle>;

export default Title;
