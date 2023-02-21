import './App.css';
import '../Login/Login';
import LoginForm from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";

/*const AppInterna = () => {
  let routes = useRoutes([
    {path : '/', element : <LoginForm />},
    {path : '/login', element : <LoginForm />}
  ]);
  return routes;
}*/

/*const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/login' element={<LoginForm />} />
        </Routes>
    </div>
  );
};*/
const App = () => {
  return (
    
      <LoginForm />
  );
};
export default App
