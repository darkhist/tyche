import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Image from './img';

const generateRandomNumber = () => Math.floor(Math.random() * 250000) + 1;

const generateURL = () => {
  const postNo = generateRandomNumber();
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

Button.displayName = 'button';

class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src:
        'https://66.media.tumblr.com/60a795da531a1cc8dc557bb8a462be84/tumblr_pnqdpjKPiR1qjm946o1_1280.jpg'
    };
  }

  async getImage() {
    const div = document.createElement('div');
    const url = generateURL();
    try {
      const res = await axios.get(url);
      div.innerHTML = res.data;
      const { src } = div.getElementsByTagName('img')[1];
      this.setState({ src });
      return src;
    } catch (e) {
      return new Error(e);
    }
  }

  render() {
    const { src } = this.state;

    return (
      <div>
        <Button onClick={() => this.getImage()}>Next</Button>
        <Image src={src} alt="" />
      </div>
    );
  }
}

export { generateURL };
export default Generator;
