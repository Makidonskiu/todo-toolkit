import React from 'react';

export const Tasks = ({text,  setText, addTodo, onEnter}) => {
  return (
    <label>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={onEnter}
      />
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
};
