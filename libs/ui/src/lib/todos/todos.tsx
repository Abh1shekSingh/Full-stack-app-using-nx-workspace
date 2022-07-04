

/* eslint-disable-next-line */
import { Todo } from "@myorg/data"

export const Todos = (props: {todos: Todo[]}) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li className={'todo'} key={todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default Todos;
