import React from 'react'
import SearchBar from '../molecules/SearchBar';
import SearchBookList from '../molecules/SearchBookList';
import BookDetails from './BookDetails/BookDetails';

function searchNavbar(onclose) {

  const data = fetch('');

  const handlechange = () => {
    // get data
  };


  return (
    <div>
      {/* blinklist logo */}
      <SearchBar matchedbook={handlechange} />
      <SearchBookList data={data}/>
      
      <BookDetails/>
    </div>
  );
}

export default searchNavbar
