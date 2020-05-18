import React from 'react';
import { render } from 'react-native-testing-library';
import SignIn from '../SignIn';

jest.mock('react-native-appearance', () => ({
  theme: jest.fn(),
}));

test('it renders all input as expected', () => {
  const { toJSON } = render(<SignIn />);
  expect(toJSON()).toMatchSnapshot();
});
