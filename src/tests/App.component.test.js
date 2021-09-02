import React from 'react';
import { render } from '@testing-library/react';
import BrowserRouter from '../components/App/App.component';

describe('App', () => {
  test('BrowserRouter should render properly', () => {
    const component = render(<BrowserRouter />);
    expect(component).toMatchSnapshot();
  });
});
