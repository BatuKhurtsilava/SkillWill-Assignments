import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useTaskContext } from "../TaskContext";

const TaskEditor = () => {
  const { id } = useParams();
  const taskRef = useRef();
  const checkRef = useRef();
  const [task, setTask] = useState('');
  const [checked, setChecked] = useState(false);
  const url = `/api/v1/taskList/${id}`;
  

const {setTaskList} = useTaskContext();
const {response, error, loading: fetchLoading,  onFetch} = useFetch(url, 'GET')
const {loading: requestLoading, sendRequest} = useRequest(url, 'PUT')
setTask(response.task);
setChecked(response.checked);

 

  const onFormSubmit = () => {
   sendRequest([taskRef.current.value, checkRef.current.value])
   setTaskList((prev) =>[ ...prev, {task: taskRef.current.value, checked: checkRef.current.value} ])
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' ref={taskRef} defaultValue={task} />
        <label>
          <input type='checkbox' ref={checkRef} defaultChecked={checked} />
          Mark as completed
        </label>
        <button type='submit'>Update Task</button>
      </form>
    </div>
  );
}

export default TaskEditor;