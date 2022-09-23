import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from "./Components/Header";
import Todos from "./Components/Todos";


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
