import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskAdder from './Components/TaskAdder';
import TaskEditor from './Components/TaskEditor';
import Tasks from './Components/Tasks';

const routes = [
  {
    element: 
    <div>
    <Tasks />
    <Outlet />
    </div>,
    path: 'tasks',
    children: [
      { element: <TaskEditor />, path: 'edit/:id' },
      { element: <TaskAdder />, path: 'add' },
    ],
  },
];

export default routes;