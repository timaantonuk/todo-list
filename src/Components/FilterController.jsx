import React, { useState } from 'react';

import FilterBtns from './FilterBtns/FilterBtns';
import TodosList from './TodosList/TodosList';

const FilterController = ({ data, setData, searchInputFilteredValue, isDarkTheme }) => {

  const [mode, setMode] = useState('all');

  return (
    <>
      <FilterBtns
        mode={mode}
        setMode={setMode}
        isDarkTheme={isDarkTheme}
      />

      <TodosList
        data={data}
        setData={setData}
        mode={mode}
        searchInputFilteredValue={searchInputFilteredValue}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
};

export default FilterController;
