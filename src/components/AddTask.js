
 import React from "react";
 const uuidv4 = require('uuid/v4')
 class AddTask extends React.Component {
  state = {
    taskDescription: ""
  }
  addTask = () => {
    const task = {
      id: uuidv4(),
      taskDescription: this.state.taskDescription,
      completed: false
    }
    this.props.newTask(task);
    this.setState({ taskDescription: "" });
  }
  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({ taskDescription });
  }
  render() {
    return (
      <div className="row">
        <div className="col-10 col-md-12 col-md-12">
          <input
            className="form-control form-control-sm"
            type="text"
            id="addTask"
            placeholder="What do you want to do..."
            value={this.state.taskDescription}
            onChange={this.taskDescriptionChanged}
          />
        </div>
        <div className="col-2 col-md-12 col-lg-12">
          <button type="button" className="btn btn-success btn btn-xs" onClick={this.addTask}>
            +
         </button>
        </div>
      </div>
    );
  }
 }
 export default AddTask;          