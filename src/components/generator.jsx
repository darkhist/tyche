const generateRandomNumber = () => Math.floor(Math.random() * 250000) + 1;

const generateURL = () =>
  `https://archillect.com/${generateRandomNumber()}`;

export { generateRandomNumber, generateURL };
