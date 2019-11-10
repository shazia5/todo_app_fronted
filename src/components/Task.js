import React from 'react';
class Task extends React.Component {
  
deleteTask = () => {
  this.props.deleteTaskFunc(this.props.task.id);

}
addTaskToList = () => {
    this.props.newTask(this.props.task.id)

}

render() {
    const completed = this.props.task.completed;

    return (
       <div className="row taskrow">

       {completed &&
        <div   className="col-12 col-md-6    completedTask">
        {this.props.task.taskDescription}
      </div>
        }
         {!completed &&
          <div className="col-12 col-md-6">
          {this.props.task.taskDescription}
       </div>
       }
       <div className="col-4 col-md-2">
       <input type="checkbox"
       aria-labelledby="Checkbox for following 
       text input"></input>
</div>       
              
  
    <div className="col-4 col-md-2">
         <button type="button" 
        
         className="btn btn-primary" onClick={this.editTask}
         >Edit </button>
</div>
      
    <div className="col-4 col-md-2">
        <button type="button"
        style={{fontSize:'X-Small'}}
        className="btn btn-danger" onClick={this.deleteTask}>
        Delete</button>
  </div>
</div>
   );
  }
}
export default Task;
       
  
 
      

      
    
              

      
  