// import logo from './logo.svg';
import { connect } from 'react-redux';
import React, {useContext} from 'react';
import './App.css';
import Footer from './MyComponents/Footer';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";


function App() {
  return (
    <div className="App">
      <Header title="Assignment-one [Task Management by using Context API]" searchBar={false} />
      <Todos />
      <Footer/>
    </div>
  );
}

export default App;
