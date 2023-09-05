import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import TaskItem from "./TaskItem";
import { useTaskContext } from '../TaskContext';
import useFetch from "../hooks/useFetch";

const Tasks = () => {
  const { taskList, setTaskList } = useTaskContext();
  const location = useLocation();
  const updateAfterDeletion = (id) => {
    const filteredTasks = taskList.filter((task) => task.id !== id);
    setTaskList(filteredTasks);
  };

  const url = '/api/v1/taskList';
  const { response, error, loading } = useFetch(url, 'GET');

  useEffect(() => {
    if (response !== null) {
      const newTaskList = response.items.map((task) => ({
        task: task.task,
        checked: task.checked,
        id: task._uuid,
      }));
      const isDifferent = newTaskList.some((newTask) => {
        return !taskList.some((currentTask) => currentTask.id === newTask.id);
      });
      if (isDifferent) {
        setTaskList(newTaskList);
      }
    }
  }, [response, setTaskList, taskList]);

 
  if (loading) return <p>Loading ...</p>;
  // if (error) return <p>{error.message}</p>;

  return (
    <div>
       {location.pathname === '/' && ( 
        <Link to="/add">Add new task</Link>
      )}
      {taskList.map((task) => (
        <TaskItem
          task={task.task}
          prevStatus={task.checked}
          key={task.id}
          id={task.id}
          onDelete={updateAfterDeletion}
        />
      ))}
    </div>
  );
};

export default Tasks;
