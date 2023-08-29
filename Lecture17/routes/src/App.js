import React from 'react';
import {createBrowserRouter, Route, RouterProvider,  } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <div >
      <RouterProvider router = {createBrowserRouter(router)} />
     
    </div>
  );
}

export default App;