const generateRandomNumber = () => Math.floor(Math.random() * 250000) + 1;

const generateURL = () => {
  const postNo = generateRandomNumber();
  return `${process.env.PROXY_URL}https://archillect.com/${postNo}`;
};

export { generateRandomNumber, generateURL };
