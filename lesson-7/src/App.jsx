import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
  const [currentValue, setCurrentValue] = useState('');
  const [todos, setTodos] = useState([]);

  const insertTodoToTheList = () => {
    if (currentValue) {
      setTodos((oldValues) => [...oldValues, currentValue]);
      setCurrentValue('');
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>You have {todos.length} Todos</span>
      <ul className={styles.todos}>
        {todos.map((item, index) => {
          return (
            <li key={index}>
              <span>{item}</span>
              <span
                className={styles.deleteButton}
                onClick={() => {
                  setTodos(
                    todos.filter((todo, todoIndex) => todoIndex !== index)
                  );
                }}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </span>
            </li>
          );
        })}
      </ul>
      <div className={styles.submitWrapper}>
        <input
          value={currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
          type="text"
          placeholder="Enter Item"
        />
        <button className={styles.submitButton} onClick={insertTodoToTheList}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default App;
