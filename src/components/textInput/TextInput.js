import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, todoDelete } from '../store/todoSlice'

export const TextInput = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
  return (
    <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input className='checkbox' type="checkbox"  checked={todos.completed} onChange={()=> dispatch(toggle({id: todo.id}))}/>
              <span className="todo-text">{todo.text}</span>
              <span onClick={()=> dispatch(todoDelete({id: todo.id}))} className="delete">&times;</span>
            </li>
          ))}
        </ul>
  )
}
