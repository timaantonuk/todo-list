import React, { useEffect } from 'react';

import TodoItem from '../TodoItem/TodoItem';

import styles from './TodosList.module.css';

const TodosList = (props) => {
  const { data, setData, mode, searchInputFilteredValue, isDarkTheme } = props;

  const importantData = data.filter((item) => item.isImportant);

  const todosCollection = (collection) => {
    return collection.map((item) => {
      if (item.task === '' || item.task === ' ') {
        return;
      }
      return (
        <TodoItem
          title={item.task}
          key={item.id}
          data={data}
          setData={setData}
          id={item.id}
          isImportant={item.isImportant}
          isCompleted={item.isCompleted}
          isDarkTheme={isDarkTheme}
        />
      );
    });
  };

  const searchThroughData = () => {
    const filterAllData = data.filter(({ task }) =>
      task.toLowerCase().includes(searchInputFilteredValue.toLowerCase())
    );
    const filterImportantData = importantData.filter(({ task }) =>
      task.toLowerCase().includes(searchInputFilteredValue.toLowerCase())
    );

    return mode === 'all' ? filterAllData : filterImportantData;
  };
  
  const finalData = searchThroughData()
  
  const renderExpression = todosCollection(finalData);

  useEffect(() => {
    if (searchInputFilteredValue.length > 0) {
      searchThroughData();
    }
  }, [searchInputFilteredValue]);

  return (
    <>
      <ul className={styles.allTodos}>{renderExpression}</ul>
      {finalData.length === 0 && mode === 'all' && (
        <h2 className={`${styles.translateUP} ${isDarkTheme ? styles.translateUP && styles.translateUPDark : ''}`}>NO TODOS </h2>
      )}
      {finalData.length === 0 && mode !== 'all' && (
        <h2 className={`${styles.translateUP} ${isDarkTheme ? styles.translateUP && styles.translateUPDark : ''}`}>NO IMPORTANT TODOS </h2>
      )}
    </>
  );
};

export default TodosList;
