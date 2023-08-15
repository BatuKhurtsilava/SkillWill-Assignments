import React, { Component } from "react";

class TodoList extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.mainState.tasks !== nextProps.mainState.tasks;
  }

  render() {
    console.log("TodoList rendering");
    const { mainState, addToDone } = this.props;

    return (
      <div>
        <h4>To Do List</h4>
        {mainState.tasks.map((task) => (
          <div key={task.id}>
            <p>{task.task}</p>
            <button onClick={() => addToDone(task.id)}>Mark as done</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;