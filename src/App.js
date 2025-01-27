/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';

import Header from './components/Header';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Footer from './components/Footer';




const axios = require('axios');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

// const myDate = moment().format("YYYY-MM-DD")



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        // {
        //   id: uuidv4(),
        //   taskDescription: "Order inhalers",
        //   completed: false,
        //   dateCreated: moment().add(2, 'days').format("YYYY-MM-DD"),

        // },

        // {
        //   id: uuidv4(),
        //   taskDescription: "Buy milk",
        //   completed: false,
        //   dateCreated: moment().add(2, 'days').format("YYYY-MM-DD"),

        // },
        // {
        //   id: uuidv4(),
        //   taskDescription: "Iman's PTA @ 6 pm",
        //   completed: false,
        //   dateCreated: moment().add(3, 'days').format("YYYY-MM-DD"),

        // },
        // {
        //   id: uuidv4(),
        //   taskDescription: "Arryans's orthodontist apppintment @ 10 am",
        //   completed: true,
        //   dateCreated: moment().add(3, 'days').format("YYYY-MM-DD"),

        // },
      ]
    }
  }
  //   componentDidMount(){
  //     axios.get('https://lhvbcmytgl.execute-api.eu-west-2.amazonaws.com/dev/tasks')
  //     .then( (response) => {
  //       // handle success
  //       this.setState({tasks:response.data.tasks});
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  // }
  //   addTaskToList = (task) => {

  //     axios.post('https://zrx5kyl08g.execute-api.eu-west-2.amazonaws.com/dev/tasks', task)
  //     .then((response) => {
  //       let tasks = this.state.tasks;
  //       task.id = response.id;
  //       tasks.push(task);
  //       this.setState({tasks: tasks});
  //     });
  //   }



  // deleteTask = (taskId) => {
  //   axios.delete(
  //     'https://lhvbcmytgl.execute-api.eu-west-2.amazonaws.com/dev/tasks/+id')

  //     .then((response) => {
  //       const filteredTask = this.state.tasks.filter(item => {
  //         // eslint-disable-next-line no-undef
  //         return task.id !== taskId;
  //       });
  //       this.setState({
  //         tasks: filteredTask
  //       })
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  addTaskToList = (task) => {
    let tasks = this.state.tasks;
    tasks.push(task);
    this.setState({
      tasks: tasks
    });
  }



  deleteTask = (taskId) => {
    let tasks = this.state.tasks;
    let filteredTask = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    this.setState({
      tasks: filteredTask
    });
  }
  completeTask = (taskId) => {
    const completeTask = this.state.tasks.map(task => {
      if (task.id === taskId) {
        task.completed = true
      }
      return task;
    });
    this.setState({
      tasks: completeTask
    })
  }


  editTask = (id, newTaskDescription) => {
    console.log(id, newTaskDescription);
    if (newTaskDescription === "") {

      return;
    }
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.forEach(task => {
      if (task.id === id) {
        task.taskDescription = newTaskDescription
      }

    });
    console.log(tasksCopy);
    this.setState({
      tasks: tasksCopy
    });

  }



  render() {
    return (
      <div className="App">
        <h6 className="fas fa-calendar-alt">**
      ({moment().format("dddd Do MMMM")})
</h6>
        <Header />

        <AddTask newTask={this.addTaskToList}
          handleChangeTaskFunc={this.handleChangeTaskFunc} />
        <hr />
        <TaskCounter count={this.state.tasks.length} />
        <hr />
        <TaskList
          tasks={this.state.tasks} completeTaskFunc={this.completeTask} deleteTaskFunc={this.deleteTask}
          editTaskFunc={this.editTask}


        />
        <hr />
        <Footer />
      </div>
    );
  }
}



export default App;