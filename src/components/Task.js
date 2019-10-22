import React from 'react';
class Task extends React.Component {
    render(){
        return(
            <div className="row">
            <div className="col-2">
            check 
            
            <div className="col-6">
              {this.props.taskDescription}
            </div>

            <div className="col-2">
            Done
              </div>
            <div className="col-2">
            Edite
            </div>
            </div>
            </div>


        


        );
    }
}

export default Task;