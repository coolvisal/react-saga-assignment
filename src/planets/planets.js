import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import ACTIONS from '../actions';
import '../App.css';

const Planets =(props)=>{
    const [planetList,setPlanetList]=useState([])
    useEffect(() => {
        props.refershPlanets();
        props.requestGetPlanets();
        setPlanetList(props.planets)
    }, []);
    const onChangeHandler= (e)=>{
        const value= e.target.value;
        const planets=[];
        props.planets.map(item=>{
            if(item.name.toUpperCase().indexOf(value.toUpperCase()) > -1){
                return planets.push(item)
            }
        })
        props.setFilterPlanetList(planets.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0)).reverse());
    }
    return (<div>
        Planets Search: &nbsp;<input type="text" onChange={onChangeHandler}></input> &nbsp;<button onClick={() => {props.history.push('/login')}}>Logout</button> <br />
        <ul className="ul">
        {props.filterPlanetList.map(item=>{
          return (
            <li className="li">
                {item.name} <br />
                Population: {item.population}
            </li>
          )})}
        </ul>      
    </div>)
}

const mapStateToProps = state => ({
    planets: state.planets,
    filterPlanetList:state.filterPlanetList
  });
  
  const mapDispatchToProps = dispatch => ({
    requestGetPlanets: () => dispatch(ACTIONS.requestGetPlanets()),
    refershPlanets: () => dispatch(ACTIONS.refershPlanets()),
    setFilterPlanetList: planets => dispatch(ACTIONS.setFilterPlanetList(planets))
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Planets))