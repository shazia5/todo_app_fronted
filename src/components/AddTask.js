
import React from "react";
import moment from 'moment';
import uuidv4 from 'uuid/v4';

class AddTask extends React.Component {
  state = {
    taskDescription: "",
    dateSelected: moment().format("YYYY-MM-DD")

  };

  addTask = (e) => {
    const task = {
      id: uuidv4(),
      taskDescription: this.state.taskDescription,
      //dateSelected:this.state.dateCreated, 
      dateSelected: this.state.dateCreated,
      // 2. another property here, the dateSelected
      // key should be dateCreated
      completed: false
    }

    this.props.newTask(task);
    console.log(task);
    this.setState({
      taskDescription: ""
    });
    // this.setState({dateCreated:""});
    this.setState({dateCreated: ""
    });
    
    this.setState({
      dateSelected: moment().format("YYYY-MM-DD")
    });
  }

  // this.dateSelected({todaysDate: ""});
  // 3. Set the dateSelected on state to be today's date again
  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({
      taskDescription
    });
  }

  handleDateChange = e => {

    // console.log(e.target.value);
    // 1. update the state when this value changes
    
    console.log(e.target.value);
    this.setState({
      dateSelected: e.target.value
    });
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
          <input
            className='form-control'
            type='date'
          onChange={this.handleDateChange}
          value= {this.state.dateSelected}
          
          >
          </input>
        </div>
        <div className="col-2 col-md-12 col-lg-12">
          <button type="button" className="btn btn-success btn btn-lg m-2" onClick={this.addTask}

          >
            Add
         </button>
        </div>
      </div>
    );
  }
}
export default AddTask;          