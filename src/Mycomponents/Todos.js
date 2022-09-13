import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div>
      <h2 className='text-center my-3' style={{backgroundColor:'red'}}>My Watchlist</h2>
      {props.todo.length===0?"Nothing in the watchlist!":
      props.todo.map((todoo)=>{
        return <TodoItem todo={todoo} key={todoo.sno} onDelete={props.onDelete}/>
      })
      }
    </div>
  )
}
