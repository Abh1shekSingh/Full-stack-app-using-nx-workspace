// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { Todo } from "@myorg/data"

export function App() {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo(){
    fetch('api/addTodo', {
        method:'POST',
        body: '',
    })
    .then((_) => _.json())
    .then((newTodo) => {
      setTodos([...todos, newTodo]);
    })
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li className='todo' key={todo.title}>{todo.title}</li>
        ))}
      </ul>

      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>

    </>
  );
}

export default App;
