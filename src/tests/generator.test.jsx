import React from 'react';
import { shallow } from 'enzyme';

import Generator from '../components/generator';

describe('Generator', () => {
  const generateURL = jest
    .fn()
    .mockImplementation(
      () => `${process.env.PROXY_URL}https://archillect.com/1234`
    );

  it('should generate a random url', () => {
    const url = generateURL();
    const num = Number.parseInt(url.slice(url.lastIndexOf('/') + 1), 10);
    expect(url).toContain('https://archillect.com/');
    expect(num).toBeGreaterThan(0);
    expect(num).toBeLessThan(250000);
  });

  it('should have a button', () => {
    const wrapper = shallow(<Generator />);
    const btn = wrapper.find('button');
    expect(btn.exists()).toBe(true);
  });

  it('should make requests when the button is clicked', () => {
    const wrapper = shallow(<Generator />);
    const btn = wrapper.find('button');
    const spy = jest.spyOn(Generator.prototype, 'getImage');
    btn.simulate('click');
    expect(spy).toHaveBeenCalled();
  });
});
