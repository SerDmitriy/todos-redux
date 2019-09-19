import React from 'react';
import App from '../App';


export default [
  {
    exact: true,
    path: '/user',
    component: () => <div>{'One user information'}</div>
  },
  {
    exact: true,
    path: '/users',
    component: () => <div>{'All users'}</div>
  },
  {
    exact: true,
    path: '/todo',
    component: () => <App/>
  },
  {
    exact: true,
    path: '/todos',
    component: () => <div>{"/todos page"}</div>
  },  
  {
    exact: true,
    path: '/user/statistic',
    component: () => <div>{"/user/statistic"}</div>
  },
]