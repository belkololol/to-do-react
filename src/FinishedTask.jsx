import React from 'react';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FinishedTask = (props) => {
    const { task, editTask, deleteTask } = props;

    const onKeyDown = (e) => {
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

    return (
        <li className="list-group-item">
            {task.contentEditable ? <input className="task active" autoFocus={true} defaultValue={task.task} onKeyDown={onKeyDown} /> : <p className="task">{task.task}</p>}
            <div className="buttons">
                <button className="btn btn-outline-primary border-0 button-edit" onClick={() => { editTask(task) }}>
                    <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn btn-outline-danger border-0 button-delete" onClick={() => { deleteTask(task); }}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>

        </li>
    )
}

export default FinishedTask; 