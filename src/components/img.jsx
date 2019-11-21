import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const StyledImg = styled.img`
  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 75vw;
    height: 70vh;
    margin: 1em 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: auto;
    height: 70vh;
    margin: 1.5em 0;
  }

  width: 60vw;
  height: 35vw;
  object-fit: cover;
  margin: 1.25em auto 1em auto;
`;

const Image = props => {
  const { src } = props;
  return (
    <StyledDiv>
      <StyledImg src={src} alt="" />
    </StyledDiv>
  );
};

Image.defaultProps = {
  src: null
};

Image.propTypes = {
  src: PropTypes.string
};

export default Image;
