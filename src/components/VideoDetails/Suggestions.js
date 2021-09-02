import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { AppContext } from '../../providers/App/AppProvider';

export default ({ videoList, changeSelection, selectedVideoId }) => {
  const { app } = useContext(AppContext);
  const { darkMode } = app;
  const changeSelectedVideo = (data) => {
    changeSelection(data);
  };
  let colorBg = 'white';
  if(!darkMode){
    colorBg = 'white';
  }else{
    colorBg = '#303030';
  }

  return (
    <>
      {videoList.length > 0 &&
        videoList.map((data) => {
          if (data?.id !== selectedVideoId) {
            return (
              <ListGroup.Item
                key={data?.id}
                onClick={() => changeSelectedVideo(data)}
                style={{ cursor: 'pointer', backgroundColor: `${colorBg}` }}
              >
                <div
                  className="backgroundColor"
                  data-theme={darkMode ? 'dark' : 'light'}
                  style={{
                    marginBottom: 10,
                    padding: 10,
                    display: 'flex',
                  }}
                >
                  <div  className="backgroundColor" data-theme={darkMode ? 'dark' : 'light'}>
                    <img
                      src={data?.thumbnails.medium.url}
                      height="60 em"
                      alt="thumbnail"
                    />
                  </div>
                  <div style={{ paddingLeft: 5 }} className="backgroundColor" data-theme={darkMode ? 'dark' : 'light'}>
                    <p >{data?.title}</p>
                    <div className="card-title">{data?.channel.title}</div>
                  </div>
                </div>
              </ListGroup.Item>
            );
          }
        })}
    </>
  );
};
