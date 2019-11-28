import React from 'react';

class Task extends React.Component {
    deleteTask = () => {
        this.props.deleteTaskFunc(this.props.task.id);
    }
    completeTask = () => {
        this.props.completeTaskFunc(this.props.task.id)
    }
    editTask = () => {
        const newTask =prompt('update task detail',this.props.task)
        this.props.editTaskFunc(this.props.task.id,newTask,)
    }
    render() {
        const completed = this.props.task.completed
        //  const edited =
        //  this.props.task.edited
        return (
            <div className="row taskrow">
                {completed && 


                    <div className="col-12 col-sm-12 col-md-12 completedTask">
                        {this.props.task.taskDescription}
                    </div>
                }
                {!completed && 
                    <div className="col-12 col-sm-12 col-md-12">
                        {this.props.task.taskDescription}
                    </div>
                }
                <div className="col-4 col-sm-4 col-md-4">
                    <button type="button" className="btn btn-outline-success btn btn-sm m-1" onClick={this.completeTask}>
                        Done
            </button>
                </div>
                <div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <button type="button" className="btn btn-outline-danger btn btn-sm m-1" onClick={this.deleteTask}>
                            Delete
                </button>
                    </div>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary btn btn-sm m-1" onClick={this.editTask}>
                        Edit
                </button>
                </div>
            </div>
        );
    }
}
export default Task;
