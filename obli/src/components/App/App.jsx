import './App.css';
import '../Login/Login';
import LoginForm from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import React from 'react';
import Registrarse  from '../Registrarse/Registrarse';
import Dashboard  from '../Dahsboard/Dahsboard';
import {BrowserRouter as Router, Routes, Route, useRoutes} from "react-router-dom";

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/registro' element={<Registrarse />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
        </Routes>
    </div>
  );
};

export default App
