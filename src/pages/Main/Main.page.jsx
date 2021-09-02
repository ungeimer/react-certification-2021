import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { VideoGrid } from '../../components/VideoCard/VideoGrid';
import { NavSearchBar } from '../../components/NavSearchBar/NavSearchBar';
import { VideoDetails } from '../../components/VideoDetails/VideoDetails';
import { AppContext } from '../../providers/App/AppProvider';
import './Main.styles.css';

const MainPage = () => {
  const { app } = useContext(AppContext);
  const { playVideo, searchButton } = app;

  if (playVideo || !searchButton) {
    return (
      <>
        <NavSearchBar />
        <br />
        <Row style={{ padding: '0 10%', marginTop: 30 }}>
          <VideoDetails />
        </Row>
      </>
    );
  }
  return (
    <>
      <NavSearchBar />
      <br />
      <VideoGrid justifyContent="center" />
    </>
  );
};

export default MainPage;
