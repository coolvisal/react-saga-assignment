import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Home from './home'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const onSubmitHandler = (userName,password) => {
        console.log(userName+' '+password)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Router>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' component={Login}></Route>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
