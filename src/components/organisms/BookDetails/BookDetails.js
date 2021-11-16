import React,{useState} from 'react'
import Kindle from '../Kindle/Kindle'
import BookDetailsTabs from '../../molecules/BookDetailsTabs'
import BookImage from '../../atoms/BookImage'
import { useQuery } from "react-query";
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

function BookDetails() {
  const { data } = useQuery('');
  
  const handleAddToLibrary = () => {};
  const handleBuy = () => {};
  const handleSendToKindle = () => {};

  return (
    <div>
      <Grid>
        <Grid item>
          <Typography>{data.name}</Typography>
          <Typography>{data.tagline}</Typography>
          <Typography>{data.authors}</Typography>

          {/* Icon labels */}

          {/* Buttons in a grid  */}

          <Kindle />

          <BookDetailsTabs />
        </Grid>
        <Grid item>
          <BookImage />
        </Grid>
      </Grid>
    </div>
  );
}

export default BookDetails
