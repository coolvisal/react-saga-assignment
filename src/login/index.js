import React,{useState,useEffect} from 'react'
import { connect } from "react-redux";
import ACTIONS from '../actions'
import { withRouter } from 'react-router-dom';

const Login = (props)=>{
    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');

    useEffect(() => {
        console.log('mount it!');
        props.requestAPIData();
    }, []);

    const onUserNameChangeHandler = (e) => {
        props.setUserName(e.target.value)
        if(props.password!== null && props.password!== ''){
            props.setIsError(false);
            props.setErrorMessage('')
        }
    }
    const onPasswordChangeHandler = (e) => {
        props.setPassword(e.target.value)
        if(props.userName!== null && props.userName!== ''){
            props.setIsError(false);
            props.setErrorMessage('')
        }
    }
    const onClickHandler=()=>{
        props.setIsError(false);
        props.setErrorMessage('')
        props.setIsLoading(true);
        if (!(props.userName && props.userName)) {
            props.setIsLoading(false);
            props.setIsError(true);
            props.setErrorMessage('Please Enter UserName/Password field.')
            return;
        }
        var isValid = props.peoples.filter((item) => {
            return (item.name===props.userName && item.birth_year===props.password)
        })
        if(isValid && isValid.length>0){
            console.log("Valid")
            props.history.push('/planets');
        }else{
            props.setIsError(true);
            props.setErrorMessage('Please enter valid crediential!')
        }
     props.setIsLoading(false);
    }
    return(
    <div>
        <header>Login</header>
        <div>
            <label>User Name: </label>
            <input type="text" value={props.userName} onChange={onUserNameChangeHandler}></input>
        </div>
        <div>
            <label>Password: </label>
            <input type="password" value={props.password} onChange={onPasswordChangeHandler}></input>
        </div>
        <button onClick={onClickHandler} disabled={props.isLoading}>Login</button>
        {props.isLoading &&
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }
        <div>{props.isError && <span>{props.errorMessage}</span>}</div>
    </div>)
}

const mapStateToProps = state => ({
    userName: state.userName,
    password: state.password,
    isLoading:state.isLoading,
    peoples:state.peoples,
    errorMessage:state.errorMessage,
    isError:state.isError
  });
  
  const mapDispatchToProps = dispatch => ({
    setUserName: item => dispatch(ACTIONS.setUserName(item)),
    setPassword: item => dispatch(ACTIONS.setPassword(item)),
    requestAPIData: ()=> dispatch(ACTIONS.requestAPIData()),
    setIsLoading: isLoading => dispatch(ACTIONS.setLoading(isLoading)),
    setIsError: msg => dispatch(ACTIONS.setIsError(msg)),
    setErrorMessage: isError => dispatch(ACTIONS.setErrorMessage(isError)),
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login))