import React from 'react'
import Grid from '@material-ui/core/Grid'
import BookDetails from '../organisms/BookDetails/BookDetails';

function SearchBookList(book) {



    return (
      <div>
        {book.map((bookitem) => {
          return (
            <div>
              <Grid container>
                <Grid onClick={<BookDetails/>}>
                    <Grid item >
                    {bookitem.title}
                    </Grid>
                    <Grid item>
                        {bookitem.author}
                    </Grid>
                </Grid>
              </Grid>
            </div>
          );
        })}
      </div>
    );
}

export default SearchBookList

