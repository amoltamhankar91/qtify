import React from 'react';
import styles from '../Search/Search.module.css';
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";



const Search = () => {
  return (
  <div className='wrapper'>
    <input 
    type="search"
    placeholder="Search for album or song"
    />
    <button>
      <SearchIcon />
    </button>
  </div>)
}

export default Search;