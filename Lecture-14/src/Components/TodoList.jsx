import React from "react";

function TodoList({tasks, addToDone }) {
  
  console.log('ToDoList');

    return (
      <div>
        <h4>To Do List</h4>
        {tasks.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
            <button onClick={() => addToDone(task.id)}>Mark as done</button>
          </div>
        ))}
      </div>
    );
}

export default React.memo(TodoList);