import { Component} from 'react';
import shortid from 'shortid';
import s from './App.module.css'

import ToDoList from './components/ToDoList'
import TodoEditor from './components/TodoEditor'

export default class App extends Component {
  state = {
    todos: [
      {text: "Выучить основы React", completed: false, id: shortid.generate()},
      {text: "Разобраться с React Router", completed: false, id: shortid.generate()},
      {text: "Пережить Redux", completed: false, id: shortid.generate()}
    ],
  }
addTodo = (text) => {
const todo = {
id: shortid.generate(),
text,
completed: false,
}
this.setState(prevState => ({
  todos: [todo, ...prevState.todos]
}))
}
deleteTodo = (todoId) => {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId)
      }))
    }
togleCompleted = (todoId) => {
  this.setState(prevState => ({
  todos: prevState.todos.map(todo => {
    if(todo.id === todoId) {
      return {
        ...todo,
        completed: !todo.comleted
      }
    }
    return todo;
  })
}))
}
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
      <h1 className={s.headling}>Список дел</h1>
    <ToDoList 
    todos={todos} 
    onDeleteTodo = {this.deleteTodo}
    onToggleCompleted = {this.togleCompleted}
    />
    <h2 className={s.total}>Общее количество дел: {todos.length}</h2>
    <h2 className={s.total}>Количество выполненных дел: {completedTodos}</h2>
    <TodoEditor onSubmit={this.addTodo}/>
    </>
    )
  }
}