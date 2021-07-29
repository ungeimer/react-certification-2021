import React from "react";
import { videoData } from '../../mock/videoData';
import { VideoCard } from "./VideoCard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


export const  VideoGrid = ()=> {

  function FormRow() {

    return (videoData.items).filter(function(vid) {
      if (vid.id.kind === "youtube#channel") {
        return false; // skip
      }
      return true;
    }).map((vi) =>  {   
    return ( 
      <React.Fragment>
        <Grid item xs={3} >
            <VideoCard
            key={vi.snippet.publishTime}
            title={vi.snippet.title}
            thumbnail={vi.snippet.thumbnails.high.url}
            description={vi.snippet.description}
            />
     
        </Grid>
      </React.Fragment>
    );
  });
  }

  return (
    <div >
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}



