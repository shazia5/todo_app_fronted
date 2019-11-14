import React from 'react';
//import AddTask from 'react';
//const uuidv4 = require('uuid/v4');
class Task extends React.Component {
   deleteTask = () => {
       this.props.deleteTaskFunc(this.props.task.id);
   }
   completedTask = () => {
       this.props.completeTaskFunc(this.props.task.id)
   }
   render() {
    //    const completed = this.props.task.completed;
       return (
           <div className="row taskrow">
               
                   <div className="col-12 col-md-6 completedTasks">
                       {this.props.task.taskDescription}
                   </div>
               
               <div className="col-6 col-md-3">
                   <button type="button" className="btn btn-primary" onClick={this.CompleteTask}>
                       Done
                           </button>
               </div>
               <div>
                   <div className="col-6 col-md-3">
                       <button type="button" className="btn btn-danger btn-m m-1 btn-size" onClick={this.deleteTask}>
                           Delete
                   </button>
                   </div>
               </div>
           </div>
       );
   }
}
export default Task;