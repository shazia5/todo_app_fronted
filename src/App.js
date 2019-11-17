import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import  Footer from './components/Footer';
const uuidv4 = require('uuid/v4');
class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     tasks: [
       { id: uuidv4(), taskDescription: "Order inhalers", completed: false },
       { id: uuidv4(), taskDescription: "Complete shopping", completed: true },
       { id: uuidv4(), taskDescription: "Book flights", completed: false },
      
     ]
   };
 }
 addTaskToList = (task) => {
   let tasks = this.state.tasks;
   tasks.push(task);
   this.setState({ tasks: tasks });
 }
 deleteTask = (taskId) => {
   let tasks = this.state.tasks;
   let filteredTask = tasks.filter(function (task) {
     return task.id !== taskId;
   });
   this.setState({ tasks: filteredTask});
  }
   completeTask = (taskId) => {
    const completeTask = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true
      }
      return task;
    });
    this.setState({ tasks: completeTask })
  }
 render() {
 return (
      <div className="container">
       <Header />
       <AddTask newTask={this.addTaskToList} />
       <TaskCounter count={this.state.tasks.length} />
       <TaskList 
       tasks={this.state.tasks}completeTaskFunc={this.completeTask} deleteTaskFunc={this.deleteTask} />
      <Footer />
        
      
    
   </div>
    );
  }
}
    
 

export default App;