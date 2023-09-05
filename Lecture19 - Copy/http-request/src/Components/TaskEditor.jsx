import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useTaskContext } from "../TaskContext";

const TaskEditor = () => {
  const { id } = useParams();
  const [task, setTask] = useState('');
  const [checked, setChecked] = useState(false);

  const url = `/api/v1/taskList/${id}`;

  const { setTaskList } = useTaskContext();
  const { response, error, loading: fetchLoading, onFetch } = useFetch(url, 'GET');
  const { loading: requestLoading, sendRequest } = useRequest({url: url, method:  'PUT'});


 console.log(response);
  useEffect(() => {
    if (response !== null) {
      setTask(response.task);
      setChecked(response.checked);
    }
  }, [response]);


  const onFormSubmit = () => {
    sendRequest({ task, checked });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' value={task} onChange={(e) => setTask(e.target.value)} />
        <label>
          <input
            type='checkbox'
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Mark as completed
        </label>
        <button type='submit'>Update Task</button>
      </form>
    </div>
  );
};

export default TaskEditor;