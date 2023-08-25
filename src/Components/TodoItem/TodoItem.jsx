import React, { useState } from 'react';

import BsCheck from '../../BsCheck';
import BsTrash from '../../BsTrash';
import BsStar from '../../BsStar';

import styles from './TodoItem.module.css';

const TodoItem = ({
  title,
  id,
  data,
  setData,
  isImportant,
  isCompleted,
  isDarkTheme,
}) => {
  const handleDelete = () => {
    const afterDeleteData = data.filter((item) => item.id !== id);
    setData(afterDeleteData);
    localStorage.setItem('todo-storage', JSON.stringify(afterDeleteData));
  };

  const handleComplete = () => {
    const afterCompleteData = data.filter((item) => {
      if (item.id === id) {
        item.isCompleted = !isCompleted;
      }
      return data;
    });
    setData(afterCompleteData);

    localStorage.setItem('todo-storage', JSON.stringify(afterCompleteData));
  };

  const handleImportant = () => {
    const afterImportantData = data.filter((item) => {
      if (item.id === id) {
        item.isImportant = !isImportant;
      }
      return data;
    });

    setData(afterImportantData);

    localStorage.setItem('todo-storage', JSON.stringify(afterImportantData));
  };

  return (
    <li
      className={`${styles.todoItemLi} ${
        isDarkTheme ? styles.todoItemLi && styles.todoItemLiDark : ''
      } ${isCompleted ? styles.completed : ''} ${
        isImportant ? styles.important : ''
      }`}
    >
      ■ {title.toUpperCase()}
      <button
        onClick={handleDelete}
        style={
          isDarkTheme
            ? { backgroundColor: 'var(--black)' }
            : { backgroundColor: 'var(--white)' }
        }
      >
        <BsTrash isDarkTheme={isDarkTheme} />
      </button>
      <button
        onClick={handleComplete}
        style={
          isDarkTheme
            ? { backgroundColor: 'var(--black)' }
            : { backgroundColor: 'var(--white)' }
        }
      >
        <BsCheck isDarkTheme={isDarkTheme} />
      </button>
      <button
        onClick={handleImportant}
        style={
          isDarkTheme
            ? { backgroundColor: 'var(--black)' }
            : { backgroundColor: 'var(--white)' }
        }
      >
        <BsStar isDarkTheme={isDarkTheme} />
      </button>
    </li>
  );
};

export default TodoItem;
