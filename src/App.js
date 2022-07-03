// import logo from './logo.svg';
import { connect } from 'react-redux';
import React, {useContext} from 'react';
import './App.css';
import AddTodo from "./MyComponents/AddTodo";
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import {todo} from './index'

function App() {

  const user = useContext(todo);
  console.log(user)
  return (
    <div className="App">
      <Header title="Assignment-one [Task Management]" searchBar={false} />
      <AddTodo />
      <Todos />
      <Footer/>
    </div>
  );
}

export default App;
