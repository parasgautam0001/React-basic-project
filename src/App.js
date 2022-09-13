import logo from "./logo.svg";
import "./App.css";
import Header from './Mycomponents/Header.js'
import Todos from './Mycomponents/Todos'
import React,{useState} from 'react'
import Footer from "./Mycomponents/Footer";
import {BrowserRouter as Router,Route, Routes as Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Trending from "./Pages/Trending";
function App() {
  const onDelete=(todoo)=>{
    console.log("Deleting!!!",todoo)
    setTodo(todo.filter((e)=>
    {
      return e!=todoo;
    }))
  }
   const [todo,setTodo]=useState([
    {
    sno:1,
    name:"Money Heist" ,
    age:"S1 23 Episode"
  },
  {
    sno:2,
    name:"Game of Thrones",
    age:"S7 15 Episode"
  },
{
  sno:3,
  name:"Mirzapur",
  age:"S2 Last Episode"
}]);
  return (
    <div className="App">
      {/* <h1>Hello {a}</h1>
      <p>Paras Here!</p> */}

      <Router>
      <Header titlee="Zee 4.0"/>
        <Switch>
          <Route path="/" element={<Home/>}/>
          <Route path="/Trending" element={<Trending/>}/>
          <Route path="/Todos" element={<Todos todo={todo} onDelete={onDelete}/> }/>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
