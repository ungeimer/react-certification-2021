import React from 'react';
import { render } from '@testing-library/react';
import { VideoGrid } from '../components/VideoCard/VideoGrid';

describe('VideoGrid', () => {
  test('Should render properly', () => {
    const component = render(<VideoGrid />);
    expect(component).toMatchSnapshot();
  });
});
