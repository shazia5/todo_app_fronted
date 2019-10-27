import React from "react";
import Task from "./Task";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        {this.props.tasks.map(function(task, index) {
          return <Task task={task} key={index} />;
        })}
      </div>
    );
  }
}

export default TaskList;