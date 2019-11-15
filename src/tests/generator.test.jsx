import {
  generateRandomNumber,
  generateURL
} from '../components/generator';

describe('Generator', () => {
  it('should generate a random number between 1 and 250,000', () => {
    const random = generateRandomNumber();
    expect(random).toBeGreaterThan(0);
    expect(random).toBeLessThan(250000);
  });

  it('should generate a random url', () => {
    const url = generateURL();
    expect(url).toContain('https://archillect.com/');
    expect(url.slice(23)).toContain(123);
  });
});
