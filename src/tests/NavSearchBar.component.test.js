/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { NavSearchBar } from '../components/NavSearchBar/NavSearchBar';

describe('NavSearchBar', () => {
  test('Should render properly', () => {
    const component = render(<NavSearchBar />);
    expect(component).toMatchSnapshot();
  });
});
