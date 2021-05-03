import React from 'react';
import FinishedTask from './FinishedTask'
import { v4 as uuidv4 } from 'uuid';

class TaskInput extends React.Component {
  state =
    JSON.parse(localStorage.getItem('taskInputState')) ||
    {
      tasks: [],
      newTask: ''
    }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let copyState = {
        tasks: [
          ...this.state.tasks,
          { task: this.state.newTask, id: uuidv4(), contentEditable: false, isDone: false }
        ],
        newTask: ''
      };
      this.setState(copyState);
      localStorage.setItem('taskInputState', JSON.stringify(copyState));
    }
  }

  onNewTaskChange = (e) => { 
    let task = e.target.value;
    let copyState = {
      tasks: [
        ...this.state.tasks,
      ],
      newTask: task
    };
    this.setState(copyState);
    localStorage.setItem('taskInputState', JSON.stringify(copyState));
  }

  deleteTask = (task) => {
    let copyState = {...this.state, tasks: this.state.tasks.filter(el => el.id !== task.id)}
    this.setState(copyState)
    localStorage.setItem('taskInputState', JSON.stringify(copyState))
  }

  editTask = (task) => {
    let copyState = {
      ...this.state,
      tasks: this.state.tasks.map(el => {
        if (el.id === task.id) {
          return { ...task, contentEditable: !task.contentEditable };
        } else {
          return { ...el, contentEditable: false };
        }
      })
    };
    this.setState(copyState);
    localStorage.setItem('taskInputState', JSON.stringify(copyState));
  }

  doneTask = (task) => {
    let copyState = {
      ...this.state,
      tasks: this.state.tasks.map(el => {
        if (el.id === task.id) {
          return { ...task, isDone: !task.isDone };
        } else {
          return el;
        }
      })
    };
    this.setState(copyState);
    localStorage.setItem('taskInputState', JSON.stringify(copyState));
  }


  render() {
    const { tasks, newTask } = this.state;

    return (
      <div className="container">
        <h1 className="text-muted">Мой список дел</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Добавьте новую задачу..."
          onChange={this.onNewTaskChange}
          onKeyDown={this.handleKeyDown}
          value={newTask}
        />
        <ul className="list-group">
          {tasks.map(task => (
            <FinishedTask
              key={task.id}
              task={task}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              doneTask={this.doneTask}
            />
          ))}
        </ul>
      </div>
    )
  };
}

export default TaskInput;