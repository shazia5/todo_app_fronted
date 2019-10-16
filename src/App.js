import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  return (
 <div className="container">
 <Header />
 <Intro introDescription ="Hello there"/>
 <Intro introDescription ="yes"/>
 <Task taskDescription="Wow"/>
 <Task taskDescription="Let the dog out "/>
 <Task taskDescription="Hello"/>
 </div>
  );
}

export default App;
