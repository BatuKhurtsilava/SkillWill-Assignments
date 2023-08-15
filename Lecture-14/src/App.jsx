import React from 'react';
import DoneList from './Components/DoneList';
import TaskAdder from './Components/TaskAdder';
import TodoList from './Components/TodoList';
import { useState, useCallback } from 'react';


function App()  {
 
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  console.log('app');

  const addNewTask = useCallback((event) => {
    const value = event.target.value;
    setInputValue(value);
  },[inputValue]);

 const submitTask = useCallback((e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      task: inputValue,
    };
    setTasks((tasks) => 
      [...tasks, task]
    );
    setInputValue('');
  }, [inputValue,tasks]);

 const removeTask = useCallback((id) => {
    setDoneTasks((doneTasks) => 
    doneTasks.filter((task) => task.id !== id),
    );
  }, [doneTasks]);

 const addToDone = useCallback((id) => {
    const targetTask = tasks.find((task) => task.id === id);
    setTasks((tasks) => 
    tasks.filter((task) => task.id !== id));
    setDoneTasks((doneTasks) => [...doneTasks, targetTask]);
  }, [tasks, doneTasks]);

 const backToTodoList = useCallback((id) => {
    const targetTask = doneTasks.find((task) => task.id === id);
    setTasks((tasks) => 
       [...tasks, targetTask]);
     setDoneTasks((doneTasks) => doneTasks.filter((task) => task.id !== id));
  }, [tasks, doneTasks]);

    return (
      <div className="App">
        <TaskAdder
          inputValue={inputValue}
          addNewTask={addNewTask}
          submitTask={submitTask}
        />
        <TodoList tasks = {tasks} addToDone={addToDone} />
        <DoneList
          
          doneTasks = {doneTasks}
          removeTask={removeTask}
          backToTodoList={backToTodoList}
        />
      </div>
    );
  
}

export default App;