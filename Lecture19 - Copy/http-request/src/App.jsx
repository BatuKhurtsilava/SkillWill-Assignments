import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Tasks from './Components/Tasks';
import routes from './routes';
import { TaskContextProvider } from './TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <RouterProvider router={createBrowserRouter(routes)}>
        <Tasks />
      </RouterProvider>
    </TaskContextProvider>
  );
}

export default App;