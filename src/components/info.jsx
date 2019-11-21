import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.p`
  @media screen and (min-width: 320px) and (max-width: 425px) {
    font-size: 1em;
    margin: 0 0.15em 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5em;
    margin: 0 0 0.5em 0;
  }

  font-size: 1.25em;
  font-style: italic;
  margin: 0.25em auto;
  text-align: center;
`;

const StyledAnchor = styled.a`
  color: black;
  text-decoration: underline;
  padding: 0 8px;

  :visited {
    color: black;
  }
`;

const Info = () => (
  <StyledInfo>
    Tyche uses the power of
    <StyledAnchor href="https://archillect.com" rel="noopener noreferrer">
      Archillect
    </StyledAnchor>
    to inspire creators
  </StyledInfo>
);

export default Info;
