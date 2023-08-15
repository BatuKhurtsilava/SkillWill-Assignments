import React from "react";

function DoneList({doneTasks, removeTask, backToTodoList} ) {
  
  console.log('DoneList');

    return (
      <div>
        <h4>Tasks Already Done</h4>
        {doneTasks.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
            <button onClick={() => removeTask(task.id)}>Remove Task</button>
            <button onClick={() => backToTodoList(task.id)}>Return to TodoList</button>
          </div>
        ))}
      </div>
    );
}

export default React.memo(DoneList);