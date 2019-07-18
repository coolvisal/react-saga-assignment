import React from 'react';
import { withRouter } from 'react-router-dom';
import { history} from '../history'
import {
    Redirect
  } from "react-router-dom";

class Home extends React.Component {
    render(){
        return(
            <div>
                <header>Welcome To Visal's Assignment Portel!!!!</header>
               <div>Please login to get the planets info. </div>
              <div> <button onClick={() =>{this.props.history.push('/login')}}>Go to Login page</button></div>
            </div>
        )
    }
}

export default withRouter(Home);