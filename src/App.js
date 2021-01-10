import { Component} from 'react';
import shortid from 'shortid';
import s from './App.module.css'

import ToDoList from './components/ToDoList'

export default class App extends Component {
  state = {
    todos: [
      {text: "Выучить основы React", completed: false, id: shortid.generate()},
      {text: "Разобраться с React Router", completed: false, id: shortid.generate()},
      {text: "Пережить Redux", completed: false, id: shortid.generate()}
    ],
  }
    deleteTodo = (todoId) => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId)
}))
  }
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
      <h1 className={s.headling}>Список дел</h1>
    <ToDoList todos={todos} onDeleteTodo = {this.deleteTodo}/>
    <h2 className={s.total}>Общее количество дел: {todos.length}</h2>
    <h2 className={s.total}>Количество выполненных дел: {completedTodos}</h2>
    </>
    )
  }
}