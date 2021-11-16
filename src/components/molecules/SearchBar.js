import React from 'react'
import TextField from '@material-ui/core/TextField'

function SearchBar(matchedbook) {

  return <div>
      {/* search icon */}
      <TextField onkeyup={matchedbook}/>
  </div>;

}

export default SearchBar
