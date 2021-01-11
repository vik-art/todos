import React from 'react';
import s from './ToDoList.module.css';

const ToDoList = ({ todos, onDeleteTodo, onToggleCompleted }) => <ul>{todos.map(todo => 
<li key={todo.id} className={s.todo}>
    <label className={s.label}>
    <input 
    type="checkbox"
    checked={todo.completed}
    onChange={() => onToggleCompleted(todo.id)}
    />
    </label>
    <p className={s.text}>{todo.text}</p>
    <button 
    className={s.button}
    onClick = {() => onDeleteTodo(todo.id)}
    >Удалить</button>
</li>)}
</ul>

export default ToDoList;