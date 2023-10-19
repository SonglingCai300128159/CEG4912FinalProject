import FUNCTION_BAR from "./FUNCTION_BAR";
import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom";
import Battery_detail from './pages/Battery_detail';
import Water_detail from './pages/Battery_detail';
import Environment_detail from './pages/Battery_detail';
import Camera_detail from './pages/Battery_detail';
function SWITCHS() {
  return (
    <>
      <Router>
         <FUNCTION_BAR/>
         <Switch>
          <Route path ='/fans' exact component={Environment_detail}/>
          <Route path ='/water-tank' component={Water_detail}/>
          <Route path ='/battery' component={Battery_detail}/>
          <Route path ='/camera' component={Camera_detail}/>
         </Switch>
      </Router>
    </>
  )
}

export default SWITCHS
