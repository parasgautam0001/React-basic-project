import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
      <h4 style={{color:'green'}}>{props.todo.name}</h4>
      <h4 style={{color:'purple'}}>{props.todo.age}</h4>
      <button className="btn btn-danger btn-sm my-3" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>

    </div>
  )
}
