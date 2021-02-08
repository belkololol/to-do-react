import React from 'react';
import FinishedTask from './FinishedTask'
import { v4 as uuidv4 } from 'uuid';

class TaskInput extends React.Component {
  state = {
    tasks: [
      { task: 'сварить суп', contentEditable: false, id: uuidv4() },
      { task: 'сгонять в щеглово', contentEditable: false, id: uuidv4() },
    ],
    newTask: ''
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let copyState = { tasks: [...this.state.tasks, { task: this.state.newTask, id: uuidv4() }], contentEditable: false, newTask: '' };
      this.setState(copyState);
    }
  }

  onNewTaskChange = (e) => {
    let task = e.target.value;
    this.setState({ newTask: task });
  }

  deleteTask = (task) => {
    let copyState = { tasks: this.state.tasks.filter(el => el.id !== task.id) }
    this.setState(copyState)
  }

  editTask = (task) => {
    let copyState = {
      tasks: this.state.tasks.map(el => {
        if (el.id === task.id) {
          return { ...task, contentEditable: !task.contentEditable };
        } else {
          return el;
        }
      })
    };
    this.setState(copyState)
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
          {tasks.map(task => <FinishedTask key={task.id} task={task} deleteTask={this.deleteTask} editTask={this.editTask} />)}
        </ul>
      </div>
    )
  };
}

export default TaskInput;