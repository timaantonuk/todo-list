import './App.css';

import { useState, useEffect } from 'react';

import Header from './Components/Header/Header';
import SearchInput from './Components/SearchInput/SearchInput';
import FilterController from './Components/FilterController';
import ThemeSwitcher from './Components/ThemeSwitcher/ThemeSwitcher';

function App() {
  function generateRandomId() {
    const randomNumber =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    return randomNumber;
  }

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const [searchInputFilteredValue, setSearchInputFilteredValue] = useState('');

  const lsData = JSON.parse(localStorage.getItem('todo-storage'));

  const mockedData = [
    {
      task: 'Complete homework',
      id: generateRandomId(),

      isCompleted: false,
      isImportant: false,
    },
    {
      task: 'Win CSS battle',
      id: generateRandomId(),

      isCompleted: false,
      isImportant: false,
    },
    {
      task: 'Walk with a dog',
      id: generateRandomId(),

      isCompleted: false,
      isImportant: false,
    },
  ];

  const [data, setData] = useState(
    lsData ? (lsData.length > 0 ? lsData : mockedData) : mockedData
  );

  return (
    <div
      className={`container ${isDarkTheme ? 'container container-dark' : ''}`}
    >
      <div
        className={`widget-bg ${isDarkTheme ? 'widget-bg widget-bg-dark' : ''}`}
      >
        <Header
          data={data}
          setData={setData}
          generateId={generateRandomId}
          isDarkTheme={isDarkTheme}
        />

        <FilterController
          data={data}
          setData={setData}
          searchInputFilteredValue={searchInputFilteredValue}
          isDarkTheme={isDarkTheme}
        />

        <SearchInput
          setSearchInputFilteredValue={setSearchInputFilteredValue}
          searchInputFilteredValue={searchInputFilteredValue}
          isDarkTheme={isDarkTheme}
        />

        <ThemeSwitcher
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      </div>
    </div>
  );
}

export default App;
