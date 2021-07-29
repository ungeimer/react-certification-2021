import React from 'react';
import { VideoGrid } from '../../components/VideoCard/VideoGrid';
import { NavSearchBar } from '../../components/NavSearchBar/NavSearchBar';
import './Main.styles.css';
const MainPage = () => {
  return (
    <div>
        <NavSearchBar/>
        <div>
        <h1> Welcome to the challenge!</h1>
        <br/>
        </div>
       
        <VideoGrid/>
        
    </div>

   
  );
}

export default MainPage;