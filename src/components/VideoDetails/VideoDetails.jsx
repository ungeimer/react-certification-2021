import React, { useEffect, useState, useContext } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import YouTube from 'simple-youtube-api';
import VideoPreview from './VideoPreview';
import Suggestions from './Suggestions';
import { AppContext } from '../../providers/App/AppProvider';
import { types } from '../../providers/App/types';

const youtube = new YouTube(process.env.REACT_APP_API_KEY_YOUTUBE);

export const VideoDetails = () => {
  const { app, dispatch } = useContext(AppContext);
  const { selectedVideo } = app;
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const callApi = async () => {
      const result = await youtube.searchVideos(selectedVideo?.title, 11);

      if (result.length === 0) {
        setError(true);
      } else {
        setError(false);
      }
      setVideoList(result);
    };
    callApi();
  }, [selectedVideo]);

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
    <>
      <Col xs={12} lg={8} md={12}>
        {error ? (
          <h1>No result found, please try looking for something else.</h1>
        ) : (
          <VideoPreview detail={selectedVideo} />
        )}
      </Col>
      <Col xs={12} lg={4} md={12}>
        {!error && (
          <>
            <ListGroup style={{ maxHeight: '80vh', overflowY: 'scroll' }} >
              <Suggestions
                
                videoList={videoList}
                changeSelection={selectedVideoCallback}
                selectedVideoId={selectedVideo?.id}
              />
            </ListGroup>
          </>
        )}
      </Col>
    </>
  );
};
