import { Express } from "express";

interface Todo {
  title: string;
}


const todos: Todo[] = [{ title: "Buy milk" }, { title: "Buy eggs" }];

export function addTodoRoutes(app: Express){
  app.get('/api/todos', (req,res) => {
    res.send(todos);
  })

  app.post('/api/addTodo', (req,res) => {
    const newTodo = {
      title: `New Todo ${Math.floor(Math.random()*1000)}`
    }
    todos.push(newTodo);
    res.send(newTodo)
  })
}
