import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import SingleCard from './SingleCard';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor:'rgba(0,0,0,.75)',
  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
    margin:'3px'
  },
 
}));


export default function SingleLineImageList({slideItems,category}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={1}>
        {
          slideItems.data.map((item)=>(
            <SingleCard item={item} key={item.title} category={category}/>
          ))
        }
      </ImageList>
    </div>
  );
}
