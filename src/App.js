import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {


  return (
    <Router>
      <div className='App'>
       
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
         
  );
};


export default App;
