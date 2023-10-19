import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Enviroment_detail from './pages/Enviroment_detail';
import Battery_detail from './pages/Battery_detail';
import Camera_detail from './pages/Camera_detail';
import Water_detail from './pages/Water_detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "fans",
    element: <Enviroment_detail/>,
  },
  {
    path: "Battery",
    element: <Battery_detail/>,
  },
  {
    path: "water-tank",
    element: <Water_detail/>,
  },
  {
    path: "Camera",
    element: <Camera_detail/>,
  },
  
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={ router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
