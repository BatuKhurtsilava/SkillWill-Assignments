import React from 'react';
import Nav from './pages/Nav';
import ParamPage from './pages/ParamPage';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';
import About from './pages/About';
const routes = [
  {
    path: '/',
    element: <Nav />, 
    children: [
      { element: <Main />, index: true  },
      {  element: <About />, path: 'about' }, 
    ],
  },
  {
    element: <ParamPage />, 
    path: 'user/:id'
  },
  {
    element: <ErrorPage />, 
    path: '*'
  },
];

export default routes;