import React from 'react'
import Startrating from './Startrating'

const Search = ({searchrate,handlesearch, handlerate,searchvalue}) => {
  return (
    <div className="header-container">
      <h1> My Movie App</h1>
      <div className="search-container">
        <input type="text" palceholder = "Search for movie"value={searchvalue} className="inp" onChange={handlesearch}/>
        <Startrating rate={searchrate} handlerate={handlerate} />
        </div>
     </div>
  )
}

export default Search
