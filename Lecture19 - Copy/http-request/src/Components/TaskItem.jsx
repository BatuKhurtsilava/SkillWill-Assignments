import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRequest from '../hooks/useRequest';


const TaskItem = ({ task, prevStatus, key, id, onDelete}) => {
  const url = `/api/v1/taskList/${id}`
  const {sendRequest} = useRequest(url,'DELETE')
  
  function deleteTask(id) {
 sendRequest(null, id);
 onDelete(id);
  }

 

  return (
    <div key={key}>
      <h3> {task}</h3>
      <p> completed: {prevStatus}</p>
      <Link to = {"/edit/${id}"}> Edit Task </Link>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  );
};

export default TaskItem;