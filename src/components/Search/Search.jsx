import React from 'react';
import styles from '../Search/Search.module.css';
import {ReactComponent as SearchIcon} from "../../assets/Search icon.svg";



const Search = () => {
  const onSubmitHandler=(e)=>{
e.preventDefault();
console.log("submitted");
  }
  return (
    <form className={styles.searchContainer} onSubmit={onSubmitHandler}>

    <input className={styles.search} type="search" placeholder="Search for album or song"/>
    <button className={styles.searchButton} type="submit"> <SearchIcon /> </button>

  </form>)
}

export default Search;