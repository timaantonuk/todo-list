import React from 'react';

import { useEffect } from 'react';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = ({ isDarkTheme, setIsDarkTheme }) => {
    
const setDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('isDarkTheme', isDarkTheme);
}    
    


  return (
    <button
      className={`${styles.themeSwitcher} ${
        isDarkTheme ? styles.themeSwitcher && styles.themeSwitcherDark : ''
      }`}
      onClick={setDarkTheme}
    >
      SWITCH THEME
    </button>
  );
};

export default ThemeSwitcher;
