import React from 'react';
import { 
  Switch, 
  Route
} from "react-router-dom";

import './App.css';
import Form from './components/Form';
import Login from './components/Login';

function App() {
  return (
    <>
        <Switch>
            <Route path="/" component={Form} exact />
            <Route path="/login" component={Login} />
        </Switch>
    </>
  );
}

export default App;
