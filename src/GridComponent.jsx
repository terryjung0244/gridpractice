import React from 'react'
import { object } from './object'
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    
  }
}))



const GridComponent = () => {

  const classes = useStyles();

  return (
    <div>
      <div>
        <Grid container className={classes.mainContainer}>
        {object.map((object, index) => {
          return (
            <Grid className={classes.mapContainer} item key={object.fruitName}>
              <Grid>
                {object.fruitName}
              </Grid>
              <Grid>
                {object.fruitColor}
              </Grid>
            </Grid>
          )
        })}
        </Grid>
      </div>
    </div>
  )
}

export default GridComponent
