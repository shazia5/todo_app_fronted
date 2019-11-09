import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import TaskCounter from './components/TaskCounter';

const uuidv4 = require('uuid/v4');
 
class App extends React.Component {
    state = {
        tasks: [ 
      {id: uuidv4(), taskDescription: "Buy milk", completed: false},
     
      {id: uuidv4(), taskDescription: "Walk dog", completed: true},
      
      { id: uuidv4(), taskDescription: "Order pizza", completed: false },
      
      { id: uuidv4(), taskDescription: "make orthodontist appointment", completed: true },
      
     
        ]
      }  

  addTaskToList = (task) => {
    let tasks = this.state.tasks;
      tasks.push(task);
      this.setState({tasks:tasks});
  }
 
deleteTask = (taskId) => {

  // console.log('hello')
  let tasks = this.state.tasks;

  let filteredTasks = tasks.filter(function(task) {
    return task.id !== taskId;
  });
this.setState({tasks: filteredTasks});
}

doneTask = id => {
  const updatedTasks = this.state.tasks.map(task => {
    if (task.id === id) {
      task.done = true;
      task.dateCompleted = new Date()
    }
    return task;
  })

  this.setState({
    tasks: updatedTasks
  });
}
markTaskAsCompleted = (taskId) => {
  const updatedTasks = this.state.tasks.map(function (task) {
    if (task.id === taskId) {
      task.completed = true
    }
    return task
  });

  this.setState({ tasks: updatedTasks })
}

markTaskAsActive = (taskId) => {
  const activeTasks = this.state.tasks.map(function (task) {
    if (task.id === taskId) {
      task.completed = false
    }
    return task
  });
  this.setState({ tasks: activeTasks })
}

render(){
  let incompleteTasks = this.state.tasks.filter(function (task) {
    if (task.completed === false) {
      return true
    }
  });

  let completedTasks = this.state.tasks.filter(function (task) {
    if (task.completed === true) {
      return true
    }
  });
     return (
         <div className="container">
          <Header />
      
           <AddTask newTask={this.addTaskToList} />
         
           <TaskCounter count={this.state.tasks.length} />
            <br />
           <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} />
            
           
            <Footer />

            
          
    </div>
          
          
       );
     }

 }
  

export default App;

