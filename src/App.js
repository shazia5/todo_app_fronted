import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  return (
 <div className="container">
 <Header />
 <Intro />
 <Task taskDescription="Buy some milk"/>
 <Task taskDescription="Buy some milk"/>
 <Task taskDescription="Buy some milk"/>
 </div>
  );
}

export default App;
