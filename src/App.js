import React from 'react'
import LoginContainer from './container/LoginContainer.tsx'
import {BrowserRouter }from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
function App() {
  return (
    <BrowserRouter>
    <Route path="/"  exact component={LoginContainer}/>
    <Route path/>

    </BrowserRouter>
    
  );
}

export default App;
