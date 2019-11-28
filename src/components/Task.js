import React from 'react';

class Task extends React.Component {
    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        var newText = prompt('Update task details', this.props.task);
        this.props.editTaskFunc(this.props.id, newText)
    }
    render() {
        const completed = this.props.task.completed

        return (
            <div className="row taskrow">
                {completed &&


                    <div className="col-12 col-md-6 col-lg-3  completedTask">
                        {this.props.task.taskDescription}
                    </div>
                }
                {!completed &&
                    <div className="col-12  col-md-6 col-lg-3">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-4 col-md-2 col-lg-3 greyItalic">
                    <button type="button" className="btn btn-success btn btn-sm m-1" onClick={this.completeTask}>
                        Done
            </button>
                </div>
                <div>
                    <div className="col-4 col-md-2 col-lg-3">
                        <button type="button" className="btn btn-danger btn btn-sm m-1" onClick={this.deleteTask}>
                            Delete
                </button>
                    </div>
                </div>
                <div className="col-4 col-md-2 col-lg-3">
                    <button type="button" className="btn btn-primary btn btn-sm m-1" onClick={this.editTask}>
                        Edit
                </button>
                </div>
            </div>
        );
    }
}
export default Task;
