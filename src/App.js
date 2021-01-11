import { Component} from 'react';
import shortid from 'shortid';
import s from './App.module.css'

import ToDoList from './components/ToDoList'
import TodoEditor from './components/TodoEditor'

export default class App extends Component {
  state = {
    todos: [],
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
componentDidMount() {
  const todos = localStorage.getItem("todos");
  const parsedTodos = JSON.parse(todos);
  if(parsedTodos) {
  this.setState({todos: parsedTodos});
  }
}
componentDidUpdate(prevProps, prevState) {
  if(this.state.todos !== prevState.todos) {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }
}
  render() {
    const { todos } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    return (
      <>
      <h1 className={s.headling}>Список дел</h1>
      <TodoEditor onSubmit={this.addTodo}/>
    <ToDoList 
    todos={todos} 
    onDeleteTodo = {this.deleteTodo}
    onToggleCompleted = {this.togleCompleted}
    />
    <div className={s.statistic}>
    <h2 className={s.total}>Общее количество дел: {todos.length}</h2>
    <h2 className={s.total}>Количество выполненных дел: {completedTodos}</h2>
    </div>
    </>
    )
  }
}