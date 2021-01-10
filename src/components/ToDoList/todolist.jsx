import React from 'react';
import s from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo }) => <ul>{todos.map(todo => 
<li key={todo.id} className={s.todo}>
    <p>{todo.text}</p>
    <button 
    className={s.button}
    onClick = {() => onDeleteTodo(todo.id)}
    >Удалить</button>
</li>)}
</ul>

export default ToDoList;