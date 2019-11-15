import generateURL from '../components/generator';

describe('Generator', () => {
  it('should generate a random url', () => {
    const url = generateURL();
    expect(url).toContain('https://archillect.com/');
    expect(url.slice(23)).toContain(123);
  });
});
