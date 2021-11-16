import React,{useQuery} from 'react'
import WishBookList from '../molecules/WishBookList'
import SearchBar from '../molecules/SearchBar'

function SearchWishList() {
    const data=useQuery('')
    
    const handlechange=()=>{
        // get data
    }
    
    return (
      <div>
        <SearchBar matchedbook={handlechange} />
        <WishBookList bookdata={data} />
      </div>
    );
}

export default SearchWishList
