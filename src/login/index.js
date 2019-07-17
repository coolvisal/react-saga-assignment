import React,{useState} from 'react'
import { connect } from "react-redux";
import ACTIONS from '../actions'

const Login = (props)=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const onUserNameChangeHandler = (e) => {
        setUserName(e.target.value);
        props.setUserName(e.target.value)
    }
    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value);
        props.setPassword(e.target.value)
    }
    const onClickHandler=()=>{
        props.requestAPIData();
    }
    return(
    <div>
        <header>Login</header>
        <div>
            <label>User Name: </label>
            <input type="text" value={userName} onChange={onUserNameChangeHandler}></input>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" value={password} onChange={onPasswordChangeHandler}></input>
        </div>
        <button onClick={onClickHandler}>Login</button>
        <div>User Name: {props.userName} Password: {props.password}</div>
    </div>)
}

const mapStateToProps = state => ({
    userName: state.userName,
    password: state.password
  });
  
  const mapDispatchToProps = dispatch => ({
    setUserName: item => dispatch(ACTIONS.setUserName(item)),
    setPassword: item => dispatch(ACTIONS.setPassword(item)),
    requestAPIData: ()=> dispatch(ACTIONS.requestAPIData())
  });

export default connect(mapStateToProps,mapDispatchToProps)(Login)