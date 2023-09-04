import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTaskContext } from '../TaskContext';
import useRequest from '../hooks/useRequest';


const TaskAdder = () => {
  const [checked, setChecked] = useState(false);
  const [task, setTask] = useState('');
  const navigate = useNavigate();
  const url = '/api/v1/taskList';
      
  const {sendRequest} = useRequest({url : url, method: 'POST'});

  const onFormSubmit = () => {

    sendRequest([task, checked]).then(() => navigate('/tasks'))
    .catch(err => console.log(err));
    
  };


  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
  };

  return (
    <div>
      <Link to = {'/tasks'}>Back to tasks</Link>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter Task'
          onChange={(e) => setTask(e.target.value)}
        />
       
          <input
            type='checkbox'
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          Mark as completed
        
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default TaskAdder;