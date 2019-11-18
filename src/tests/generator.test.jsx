import { generateURL } from '../components/generator';

describe('Generator', () => {
  it('should generate a random url', () => {
    const url = generateURL();
    const num = Number.parseInt(url.slice(url.lastIndexOf('/') + 1), 10);
    expect(url).toContain('https://archillect.com/');
    expect(num).toBeGreaterThan(0);
    expect(num).toBeLessThan(250000);
  });
});
