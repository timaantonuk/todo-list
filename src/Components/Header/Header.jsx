import React, { useState } from 'react';

import styles from './Header.module.css';

const Header = ({ data, setData, generateId, isDarkTheme }) => {
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const createNewTodo = () => {
    const updatedData = [
      ...data,
      {
        task: inputValue,
        id: generateId(),
        isCompleted: false,
        isImportant: false,
      },
    ];

    setData(updatedData);
    localStorage.setItem('todo-storage', JSON.stringify(updatedData));

    setInputValue('');
    console.log(data);
  };

  return (
    <header>
      <h1 className={`${styles.title} ${isDarkTheme ? styles.title && styles.titleDark : ''}`}>TODO LIST</h1>
      <h2 className={`${styles.subtitle} ${isDarkTheme ? styles.subtitle && styles.titleDark : ''}`}>TODOS QUANTITY: {data.length}</h2>
      <div className={styles.inputContainer}>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='CREATE YOUR TASK...'
          className={`${styles.createInput} ${isDarkTheme ? styles.createInput && styles.createInputDark : ''}`}
        />
        <button className={`${styles.createBtn} ${isDarkTheme ? styles.createBtn && styles.createBtnDark : ''}`} onClick={createNewTodo}>
          CREATE TODO
        </button>
      </div>
    </header>
  );
};

export default Header;
