import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './components/store/todoSlice'; 

import './App.css';
import { Tasks } from './components/tasks/Tasks';
import { TextInput } from './components/textInput/TextInput';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch()

  const addTask = () => {
    dispatch(addTodo({text}))
    setText('')
  }

  const onEnter = (e) => {
    if(e.key === 'Enter') {
      dispatch(addTodo({text}))
      setText('')
    }
  }  

  return (
    <div className="App">
      <h1>Tasks</h1>
      <div className='container'>
        <Tasks text={text} setText={setText} addTodo={addTask} onEnter={onEnter}/>
        <TextInput />
      </div>
    </div>
  );
}

export default App;
