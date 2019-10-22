import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';

function App() {
  return (
 <div className="container">
 <Header />
 <Intro introDescription ="remaining task"/>
 
 <Task taskDescription="Iman's PTA @ 6pm"/>
 <Task taskDescription="make orthodontist appointment for Arryan"/>
 <Task taskDescription="book theory test for Areesh"/>
 <Task taskDescription="take windows measurement to order curtain "/>
 <Task taskDescription="pick up prescription from GP"/>
 </div>
  );
}

export default App;
