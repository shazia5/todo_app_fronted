import React from "react";


class TaskCounter extends React.Component {
  render() {
    return (
        <div className="row d-none d-sm-block">
            <div className="col">
            <h6>
                <i className="fas fa-bell"></i>......
                you have {this.props.count} tasks remaining
              
                
                </h6>

              
            </div>
        </div>
    );
  }
}

export default TaskCounter;