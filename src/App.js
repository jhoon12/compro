import React from "react";
import LoginContainer from "./container/LoginContainer.tsx";
import MainContainer from './container/MainContainer';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginContainer} />
      <Route path="/main" exact component={MainContainer} />
    </BrowserRouter>
  );
}

export default App;
