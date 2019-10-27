      import React from 'react';
      class Task extends React.Component {
        render(){
            return(
                <div className="row taskrow">
                <div className="col-4 col-md-2">
                <input type="checkbox" aria-label="Checkbox for following text input"></input>
          </div>
                 <div className="col-12 col-md-6">
                  {this.props.task.taskDescriptio}
          </div>
    
                 <div className="col-4 col-md-2">
                 <button type="button" class="btn btn-primary">Done</button>
          </div>
                <div className="col-4 col-md-2">
                <button type="button" class="btn btn-warning">Edit</button>
            </div>
         </div> 
        );
      }
    }
    
    export default Task;

      