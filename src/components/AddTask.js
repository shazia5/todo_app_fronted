
 import React from "react";
 import moment from 'moment';
 import uuidv4 from 'uuid/v4';

 class AddTask extends React.Component {
  state = {
    taskDescription: "",
    dateSelected: moment().format("YYYY-MM-DD")
  }
  addTask = () => {
    const task = {
      id: uuidv4(),
     taskDescription:this.state.taskDescription,
     dateSelected:this.state.dateCreated ,  
     // 2. another property here, the dateSelected
      // key should be dateCreated
      completed: false
    }
    this.props.newTask(task);
    this.setState({ taskDescription: "" });
  
    
    // this.setState({dateCreated:""});
  this.props.dateSelected(moment(e).format("YYYY-MM-DD"))
    this.setState({dateCreated:""});
    // this.dateSelected({todaysDate: ""};
    // 3. Set the dateSelected on state to be today's date again
    
  
  
  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;
    taskDescription = event.target.value;
    this.setState({ taskDescription });
  }
   handleDateChange = e => {
    
    // console.log(e.target.value);
    // 1. update the state when this value changes
    console.log(e)
    console.log(moment(e).format("YYYY-MM-DD"))
    console.log('this is what happens when I selected date ' + e)
    this.setState({
        dateSelected: moment(e).format("YYYY-MM-DD")
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
          <input type='date'
          value={this.state.dateSelected} className='form-control ' onChange={this.handleDateChange}></input>
        </div>
        <div className="col-2 col-md-12 col-lg-12">
          <button type="button" className="btn btn-success btn btn-md" onClick={this.addTask}>
            Add
         </button>
        </div>
      </div>
    );
  }
 }
 export default AddTask;          