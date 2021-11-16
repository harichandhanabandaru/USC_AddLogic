import React from 'react'
import searchicon from '../atoms/Icons/searchicon'
import BookDetails from './BookDetails/BookDetails'
import SearchWishList from './SearchWishList'
import Typography from '@material-ui/core/Typography'

function WishList({imgsrc}) {
    return (
      <div>
        <img src={imgsrc}/>
        <Typography> upvote your favorite below or earch to add a new book:</Typography>
        <SearchWishList/>
        
      </div>
    );
}
export default WishList;
