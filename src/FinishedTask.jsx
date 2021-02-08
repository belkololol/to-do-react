import React from 'react';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class FinishedTask extends React.Component {
    onKeyDown = (e) => {
        const { task, editTask } = this.props;
        if (e.key === 'Enter') {
            let editedTask = {
                ...task,
                task: e.target.value
            };
            editTask(editedTask);
        }
        if (e.key === 'Escape') {
            editTask(task);
        }
    }
    render() {
        const { task, editTask, deleteTask, doneTask } = this.props;

        return (
            <li className="list-group-item">
                {task.contentEditable
                    ? <input
                        className="task active"
                        autoFocus={true}
                        defaultValue={task.task}
                        onKeyDown={this.onKeyDown}
                    />
                    : <p
                        className={`task ${task.isDone ? 'done' : ''}`}
                        onClick={() => { doneTask(task) }}
                    >
                        {task.task}
                    </p>
                }
                <div className="buttons">
                    <button
                        className="btn btn-outline-primary border-0 button-edit"
                        onClick={() => { editTask(task) }}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                        className="btn btn-outline-danger border-0 button-delete"
                        onClick={() => { deleteTask(task); }}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </li>
        )
    }
}

export default FinishedTask; 