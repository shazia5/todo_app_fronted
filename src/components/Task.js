import React from 'react';

class Task extends React.Component {
    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        this.props.editTaskFunc(this.props.task.id)
    }
    render() {
        const completed = this.props.task.completed
         
        return (
            <div className="row taskrow">
                {completed && 


                    <div className="col-12 col-md-6 col-sm-12 completedTask">
                        {this.props.task.taskDescription}
                    </div>
                }
                {!completed && 
                    <div className="col-12 col-md-6 col-sm-12">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-4 col-md-4 col-sm-4">
                    <button type="button" className="btn btn-warning btn btn-sm m-1" onClick={this.completeTask}>
                        Done
            </button>
                </div>
                <div>
                    <div className="col-4 col-md-4 col-sm-4">
                        <button type="button" className="btn btn-danger btn btn-sm m-1" onClick={this.deleteTask}>
                            Del
                </button>
                    </div>
                </div>
                <div className="col-4 col-md-4 col-sm-4">
                    <button type="button" className="btn btn-primary btn btn-sm m-1" onClick={this.editTask}>
                        Edit
                </button>
                </div>
            </div>
        );
    }
}
export default Task;
