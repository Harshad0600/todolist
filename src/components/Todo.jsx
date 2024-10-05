import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, deleteTodo, editTodo, toggleComplete, moveTodoUp, moveTodoDown }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : 'incompleted'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        {/* Up Arrow */}
        <FontAwesomeIcon className="up-icon" icon={faArrowUp} onClick={() => moveTodoUp(task.id)} />
        {/* Down Arrow */}
        <FontAwesomeIcon className="down-icon" icon={faArrowDown} onClick={() => moveTodoDown(task.id)} />
        {/* Edit Icon */}
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        {/* Delete Icon */}
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}

export default Todo;
