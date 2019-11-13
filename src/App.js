import React from 'react';
import './App.css';
import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
const uuidv4 = require('uuid/v4');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: uuidv4(), taskDescription: "do laundary", completed: false },
        { id: uuidv4(), taskDescription: "pick up prescription ", completed: true },
        { id: uuidv4(), taskDescription: "pay bill", completed: false },
        { id: uuidv4(), taskDescription: "make gp appointment", completed: true },
        { id: uuidv4(), taskDescription: "pick groceries", completed: false },
        { id: uuidv4(), taskDescription: "pick up milk", completed: false }
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

    let filteredTasks = tasks.filter(function (task) {
      return task.id !== taskId;
      
    });
    this.setState({ tasks: filteredTasks });

  }
  
    
    // const completedTasks = this.state.tasks.filter(task => {
    //   return task.completed;
    // });
  
    
  render() {
    return (
      <div className="container">
        <Header />
        <AddTask newTask={this.addTaskToList} />
        <TaskCounter count={this.state.tasks.length} />
        <TaskList tasks={this.state.tasks} deleteTaskFunc={this.deleteTask} id={this.Id} />
 </div>

    );
  }
}
export default App;


 