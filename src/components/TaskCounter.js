import React from "react";

class TaskCounter extends React.Component {
  render() {
    return (
        <div className="row d-none d-sm-block">
            <div className="col">
                you have {this.props.count} tasks remaining
                
            </div>
        </div>
    );
  }
}

export default TaskCounter;