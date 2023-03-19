import React from 'react';
import styles from "./Search.module.scss"

const Search = ({setSearch, setPage}) => {
  return (
    <form className="d-flex justify-content-center gap-4 mb-5">
        <input type="text"
        className={styles.input}
        placeholder="Search for Characters"
        onChange={e=>{
          setPage(1);
          setSearch(e.target.value);
          
        }}
        />
        <button 
        onClick={e=>{
          e.preventDefault();
        }} 
        className={`${styles.btn} btn btn-primary`}>Search</button>
    </form>
  )
}

export default Search                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               