import React, { useEffect, useState, useContext } from 'react';
import YouTube from 'simple-youtube-api';
import Grid from '@material-ui/core/Grid';
import VideoCard from './VideoCard';
import { AppContext } from '../../providers/App/AppProvider';
import { types } from '../../providers/App/types';

const youtube = new YouTube(process.env.REACT_APP_API_KEY_YOUTUBE);

export const VideoGrid = () => {
  const { app, dispatch } = useContext(AppContext);
  const { passToChild, selectedVideo } = app;

  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchStringToUse =
      passToChild || localStorage.getItem('lastSearch') || 'Wizeline';
    const callApi = async () => {
      const result = await youtube.searchVideos(searchStringToUse, 20);

      if (result.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setVideoList(result);
    };
    callApi();
    localStorage.setItem('lastSearch', passToChild);
  }, [passToChild, selectedVideo]);

  const selectedVideoCallback = (videoDetail) => {
    dispatch({
      type: types.setPlayVideo,
      payload: true,
    });
    dispatch({
      type: types.setSearchButton,
      payload: false,
    });
    dispatch({
      type: types.setSelectedVideo,
      payload: videoDetail,
    });
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container>
      {!error && (
        <Grid container justifyContent="center">
          <Grid container key={selectedVideo?.id} item justifyContent="center">
            <VideoCard
              changeSelection={selectedVideoCallback}
              videoList={videoList}
              selectedVideoId={selectedVideo?.id}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
