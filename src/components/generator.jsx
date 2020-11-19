import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Image from './img';

const generateURL = () => {
  const postNo = Math.floor(Math.random() * 250000) + 1;
  return `https://shrouded-fjord-75956.herokuapp.com/archillect.com/${postNo}`;
};

const Button = styled.button`
  @media screen and (min-width: 320px) and (max-width: 425px) {
    margin: 0.75em auto 0.25em auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.5em;
  }

  border: 2px solid black;
  border-radius: 3px;
  background-color: white;
  color: black;
  display: block;
  font-size: 1em;
  margin: 1em auto 0 auto;
  padding: 0.25em 1em;
  text-align: center;

  :hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

const LoadingContainer = styled.div`
  font-size: 1.25rem;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: 10rem 0;
`;

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

Button.displayName = 'button';
LoadingContainer.displayName = 'loadingContainer';
Loading.displayName = 'loading';

const Generator = () => {
  const [source, setSource] = useState(
    'https://66.media.tumblr.com/60a795da531a1cc8dc557bb8a462be84/tumblr_pnqdpjKPiR1qjm946o1_1280.jpg'
  );
  const [isLoading, setisLoading] = useState(false);

  const getImage = async () => {
    setisLoading(true);
    const div = document.createElement('div');
    const url = generateURL();

    try {
      const res = await axios.get(url);
      div.innerHTML = res.data;
      const { src } = div.getElementsByTagName('img')[1];
      if (src) {
        setSource(src);
        setisLoading(false);
      }
      return src;
    } catch (e) {
      setisLoading(false);
      return new Error(e);
    }
  };

  return isLoading ? (
    <>
      <LoadingContainer>
        <Loading> Loading... </Loading>
      </LoadingContainer>
    </>
  ) : (
    <>
      <Button
        onClick={() => {
          getImage();
        }}
      >
        Next
      </Button>
      <Image src={source} alt="" />
    </>
  );
};

export { generateURL };
export default Generator;
