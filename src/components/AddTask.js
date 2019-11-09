import React from "react";
const uuidv4 = require('uuid/v4');


class AddTask extends React.Component {

  state = {
    taskDescription: ""
  }
  
  addTask = () => {
    const task = {
        id: uuidv4,
        taskDescription: this.state.taskDescription,
        completed: false
    }
if(this.state)
    this.props.newTask(task);

    
    this.setState({taskDescription: ""});
  }

  taskDescriptionChanged = (event) => {
    let taskDescription = this.state.taskDescription;

    taskDescription = event.target.value;

    this.setState({taskDescription});
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-10">
          <input
            className="form-control"
            type="text"
            placeholder="What do you want to do..."
            value={this.state.taskDescription}
            onChange={this.taskDescriptionChanged}
          />
        </div>
        <div className="col-12 col-md-2">
          <button type="button" className="btn btn-success" onClick={this.addTask}>
            CREATE
          </button>
        </div>
      </div>
    );
  }
}

export default AddTask;














// class AddTask extends React.Component {

//   state = {
//     taskDescription: ""
//   }
  
//   addTask = () => {
//     const task = {
//         id: 1,
//         taskDescription: this.state.taskDescription,
//         completed: false
//     }

    
//     this.props.newTask(task);


//     this.setState({taskDescription: ""});
//   }

//   taskDescriptionChanged = (event) => {
//     let taskDescription = this.state.taskDescription;

//     taskDescription = event.target.value;

//     this.setState({taskDescription});
//   }

//   render() {
//     return (
//       <form className="form-inline">
//         <div className="col-12 col-md-10">
//           <input
//             className="form-control"
//             id="AddTask"
//             placeholder="What do you want to do..."
//             value={this.state.taskDescription}
//             onChange={this.taskDescriptionChanged}
//           ></input>
//         </div>
//         <button className="btn btn-primary mb-2" onClick={this.handleClick} disabled={this.state.taskDescription.length === 0}>
//         Add to List
//       </button>
//     </form>
        
      
//     );
//   }
// }

// export default AddTask;
   
       
       
       
       