import React,{useState} from 'react'
import { useQuery } from "react-query";
import BookCard from '../molecules/BookCard'
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'

function BookGrid() {
  
    const { booklist } = useQuery('');

    return (
      <div>
        <Typography>My Library</Typography>
        <Grid>
          {booklist.map((book) => (
            <Grid item>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
}

export default BookGrid;
