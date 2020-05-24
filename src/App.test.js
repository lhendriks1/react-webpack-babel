import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const title = 'test';
  shallow(<App title={title} />);
});

it('contains div element', () => {
  const title = 'test';
  const wrapper = shallow(<App title={title} />);
  expect(wrapper.contains(<div />));
});
