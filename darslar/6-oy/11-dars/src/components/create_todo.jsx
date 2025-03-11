import React from 'react'



const CreateTodo = ({todo, renderDta}) => {
  const onUpdate = (e) => {
    console.log(e);
  }
  return (
    <div>
        <h1>{todo.title}</h1>
        <button onClick={onUpdate}>update</button>
        <button>delete</button>
    </div>
  )
}

export default CreateTodo