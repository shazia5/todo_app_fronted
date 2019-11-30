import React from 'react';


class Task extends React.Component {
    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        var newTaskDescription = prompt('Update task', this.props.task.taskDescription);
        this.props.editTaskFunc(this.props.task.id, newTaskDescription)
    }
    render() {
        const completed = this.props.task.completed

        return (
            <div className="row taskrow">
                {completed &&
                    <div className="col-12 col-md-6 col-lg-6  completedTask">
                        {this.props.task.taskDescription}
                    </div>
                }
                {!completed &&
                    <div className="col-12  col-md-6 col-lg-6">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className= "col-12 col-md-6 col-lg-6">
                    {this.props.task.dateCreated
                    }
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                    <button type="button" className="btn btn-success btn btn-sm m-1" onClick={this.completeTask}>
                        Done
            </button>
                </div>

                <div className="col-4 col-md-4 col-lg-4">
                    <button type="button" className="btn btn-danger btn btn-sm m-1" onClick={this.deleteTask}>
                        Delete
             </button>
                </div>
                <div className="col-4 col-md-4 col-lg-4">
                    <button type="button" className="btn btn-primary btn btn-sm m-1" onClick={this.editTask}>
                        Edit
                 </button>
                </div>
            </div>

        );
    }
}
export default Task;
