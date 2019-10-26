import React from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Task from './components/Task';
import Media from './components/Media';


function App() {
  return (
 <div className="container">
 <Header />
 <Intro introDescription ="remaining task"/>
 <Media image ="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_440,q_50,w_1000/v1/clients/anchorage/highway-deyoung-state_edited_a6dbb76b-6b90-43ca-add5-6464ba6e9536.jpg"
     alt="scenic view " />

 <Task taskDescription="Iman's PTA @ 6pm"/>
 <Task taskDescription="make orthodontist appointment for Arryan"/>
 <Task taskDescription="book theory test for Areesh"/>
 <Task taskDescription="take windows measurement to order curtain "/>
 <Task taskDescription="pick up prescription from GP"/>
 </div>
  );
}

export default App;
