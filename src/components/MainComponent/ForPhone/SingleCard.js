import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Typography } from '@material-ui/core';
// import itemData from './itemData';
const useStyles = makeStyles((theme) => ({
    
    
    title: {
      color: '#fff',
    },
    titleBar: {
      background:
        ' rgba(0,0,0,.75)',
    },
  }));
  

const SingleCard = ({item,category}) => {
    const classes = useStyles();
    return (
        <>
           
          <ImageListItem key={item.img}>
            <img src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                    <Typography  className={classes.title}>{item.genre.charAt(0).toUpperCase()}</Typography>
                  <StarBorderIcon className={classes.title} style={{color:'goldenrod'}} />
                </IconButton>
              }
            />
          </ImageListItem>
        
        </>

    )
}

export default SingleCard
