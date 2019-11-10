

  import React from 'react';
  import './App.css';
  import Header from './components/Header';
  import AddTask from './components/AddTask';
  import TaskCounter from './components/TaskCounter';
  import TaskList from './components/TaskList';
  import Footer from './components/Footer';
  
  
  const uuidv4 = require('uuid/v4');
  
  
  class App extends React.Component {
  
    state = {
      tasks: [ 
        {id: uuidv4(), taskDescription: "Buy milk", completed: false},
        {id: uuidv4(), taskDescription: "Walk dog", completed: true},
        {id: uuidv4(), taskDescription: "Make GP appointment", completed: false},
        {id: uuidv4(), taskDescription: "get some groceries", completed: true},
      ]
    }
  
  addTaskToList = (task) => {
      let tasks = this.state.tasks;
      tasks.push(task);
      this.setState({tasks: tasks});
 }
  
  deleteTask = (taskId) => {
      alert('App ll delete task ${taskId}');
      console.log(taskId)
  // This will be an array of tasks that are in state
      let tasks = this.state.tasks;
      let filteredTasks = tasks.filter(function(task) {
        return (task.id !== taskId)
 });
       this.setState({tasks: filteredTasks});
}
completeTask = id => {
  const updatedTasks = this.state.tasks.map(task => {
    if (task.id === id) {
      task.completed = true;
    }

    return task;
  });

  this.setState({
    tasks: updatedTasks
  });
}
  
    render() {
      const completedTasks = this.state.tasks.filter(task => {
        return task.completed;
      })
      const incompleteTasks = this.state.tasks.filter(task => {
        return task.completed ? false : true;
      });
      return (
        <div className="container">
          <Header />
          <AddTask newTask={this.addTaskToList} />
          <TaskCounter count={this.state.tasks.length} />
          <br />
          <TaskList tasks=
          {this.state.tasks} deleteTaskFunc={this.deleteTask}taskCompletedFun={this.taskCompleted} />
          <Footer />
        </div>
      );
    }
  }
  
  export default App;