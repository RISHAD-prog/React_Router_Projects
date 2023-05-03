import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home';
import Shop from './component/shop/Shop';
import Order from './component/Order/Order';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import loadStorageData from './loader/loadStorageData';
import Checkout from './component/checkout/Checkout';
import SignUp from './component/SignUp/SignUp';
import AuthProvider from './component/Provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: loadStorageData
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivateRoute> <Checkout></Checkout></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
