import React from 'react';

export default [
  
  {
    exact: true,
    path: '/login',
    component: () => <div>{"/login"}</div>
  },
  {
    exact: true,
    path: '/registration',
    component: () => <div>{"/registration"}</div>
  },

  {
    exact: true,
    path: '/about',
    component: () => <div>{"/about page"}</div>
  },
]
