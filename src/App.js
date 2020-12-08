import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { NavigationBar } from './Components/NavigationBar';

const App = () => {


  return (
    <Router>
      {/* <NavigationBar /> */}
      <div className='App'>
        
        <Switch>
          <Route exact path='/' component={Home}/>

        </Switch>
      </div>
    </Router>
         
  );
};


export default App;
