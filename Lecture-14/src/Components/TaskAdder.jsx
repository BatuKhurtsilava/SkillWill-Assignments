import React  from "react";

function TaskAdder({inputValue, addNewTask, submitTask })  {
  
  console.log('TaskAdder');
    
    return (
      <div>
        <form onSubmit={(e) => submitTask(e)}>
          <input
            type="text"
            placeholder="Add new task"
            value={inputValue}
            onChange={addNewTask}
          />
          <button type="submit"> Add to list </button>
        </form>
      </div>
    );
  
}

export default React.memo(TaskAdder);