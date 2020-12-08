import React from 'react';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
const App = () => {


  return (
    <Router>
      {/* <NavigationBar /> */}
      <div className='App'>
        <LoginButton/>
        <LogoutButton />
        <Switch>
          <Route exact path='/' component={Home}/>
          
        </Switch>
      </div>
    </Router>
         
  );
};


export default App;
