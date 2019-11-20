import React from "react";

class TaskCounter extends React.Component {
  render() {
    return (
        <div className="row d-none d-md-block">
            <div className="col">
                YOU HAVE {this.props.count} TASKS REMAINING
            </div>
        </div>
    );
  }
}

export default TaskCounter;