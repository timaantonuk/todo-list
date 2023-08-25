import React from 'react';

import styles from './SearchInput.module.css';

import BsSearch from '../BsSearch';

const SearchInput = ({
  setSearchInputFilteredValue,
  searchInputFilteredValue,
  isDarkTheme,
}) => {
  const handleFilterValue = (e) => {
    setSearchInputFilteredValue(e.target.value);
  };

  return (
    <div>
      <input
        className={`${styles.searchInput} ${isDarkTheme ? styles.searchInput && styles.searchInputDark : ''}`}
        type='text'
        placeholder='FIND TODO...'
        value={searchInputFilteredValue}
        onChange={handleFilterValue}
      />
      <BsSearch isDarkTheme={isDarkTheme}/>
    </div>
  );
};

export default SearchInput;
