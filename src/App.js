import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login';
import Home from './home';
import Planets from './planets/planets'
import PlanetInfo from './planets/planetInfo'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { history} from './history'
import { connect } from "react-redux";
// import { createBrowserHistory } from "history";

// const customHistory = createBrowserHistory();

function App(props) {
  const onSubmitHandler = (userName,password) => {
        console.log(userName+' '+password)
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Router history={history}>
            <Route path='/' exact component={Home}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/planets' component={Planets}></Route>
          </Router>
        </div>
      </header>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps,{})(App);
