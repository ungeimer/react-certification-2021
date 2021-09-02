import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { AppContext } from '../../providers/App/AppProvider';

const VideoCard = ({ changeSelection, videoList, selectedVideoId }) => {
  const { app } = useContext(AppContext);
  const { darkMode } = app;
  const changeSelectedVideo = (data) => {
    changeSelection(data);
  };

  return (
    <>
      {videoList.length > 0 &&
        videoList.map((data) => {
          if (data?.id !== selectedVideoId) {
            return (
              <Grid
                item
                xs={8}
                sm={10}
                md={4}
                lg={3}
                xl={3}
                key={data?.id}
                onClick={() => {
                  changeSelectedVideo(data);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="backgroundColor" data-theme={darkMode ? 'dark' : 'light'}>
                  <div className="card" data-theme={darkMode ? 'dark' : 'light'}>
                    <div className="card-cover-image">
                      <img src={data?.thumbnails.medium.url} alt="thumbnail" />
                    </div>
                    <div className="card-box" data-theme={darkMode ? 'dark' : 'light'}>
                      <div className="card-title" data-theme={darkMode ? 'dark' : 'light'}>
                        <span>{data?.title}</span>
                      </div>
                      <div className="card-subtitle" data-theme={darkMode ? 'dark' : 'light'}>{data?.channel.title}</div>
                      <div className="card-content" data-theme={darkMode ? 'dark' : 'light'}>
                        <p>{data?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          }
        })}
    </>
  );
};

export default VideoCard;
