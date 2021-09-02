import React from 'react';
import { render, screen } from '@testing-library/react';
import { VideoCard } from '../components/VideoCard/VideoCard';
import videoData from '../mock/videoData';

// console.log(videoData[1].items.snippet.title);
console.log('POR QUE FALLAAAAAAAAAAAA');
beforeEach(() => {
  render(<VideoCard snippet={videoData[1].items.snippet} />);
});

describe('VideoCard', () => {
  test('Should contain a default thumbnail', () => {
    const thumbnailUrl = screen.getByRole('img', {
      name: videoData[1].items.snippet.thumbnails.default,
    });
    expect(thumbnailUrl).toBeInTheDocument();
  });

  test('Should contain a title', () => {
    const title = screen.queryByText(videoData[1].items.snippet.title);
    expect(title).toBeInTheDocument();
  });

  test('Should contain a description', () => {
    const description = screen.queryByText(videoData[1].items.snippet.description);
    expect(description).toBeInTheDocument();
  });

  test('Should contain a publish time', () => {
    const publishTime = screen.queryByText(videoData[1].items.snippet.publishTime);
    expect(publishTime).toBeInTheDocument();
  });
});
