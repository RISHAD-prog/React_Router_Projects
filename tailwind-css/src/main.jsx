import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './component/home/Home';
import Products from './component/products/Products';
import About from './component/about/About';
import UserDetails from './component/userDetails/UserDetails';

const router = createBrowserRouter([{
  path: "/",
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <Products></Products>,
    },
    {
      path: 'about',
      element: <About></About>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')
    },
    {
      path: 'about/:userId',
      element: <UserDetails></UserDetails>,
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    }
  ]
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
