import React,{useEffect,useState} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import ACTIONS from '../actions';
import '../App.css';
import Planet from './planet';
import PlanetInfo from './planetInfo'  
import Popup from "reactjs-popup";

const Planets =(props)=>{
    const [planet,setPlanet]=useState([])
    const [searchText,setSearchText]=useState([])
    useEffect(() => {
        props.refershPlanets();
        props.requestGetPlanets();
    }, []);
    const onChangeHandler= (e)=>{
        const value= e.target.value;
        setSearchText(value)
        const planets=[];
        props.planets.map(item=>{
            if(item.name.toUpperCase().indexOf(value.toUpperCase()) > -1){
                if(item.population==="unknown"){
                    item.population=0;
                }
                return planets.push(item)
            }
        })
        props.setFilterPlanetList(planets.sort((a,b) => (a.population > b.population) ? 1 : ((b.population > a.population) ? -1 : 0)).reverse());
    }

    const onClickPlanetHandler= (planet)=>{
        console.log('onClickPlanetHandler',planet)
        setPlanet(planet);
        props.setIsPopup(true);
    }

    return (<div>
        Planets Search: &nbsp;<input type="text" onChange={onChangeHandler}></input> &nbsp;<button onClick={() => {props.history.push('/login')}}>Logout</button> <br />
        <div style={{display:"inline-block",float:"left"}}><ul className="ul">
        {props.filterPlanetList.map(item=>{
          return (
            <Planet  key={item.name} 
            onClickPlanetHandler={onClickPlanetHandler} 
            searchText={searchText}  
            planet={item}/>
          )})}
        </ul> </div>
        <div style={{display:"inline-block",float:"right"}}>{props.isPopup && <PlanetInfo planet={planet}></PlanetInfo>}</div>
    </div>)
}

const mapStateToProps = state => ({
    planets: state.planets,
    filterPlanetList:state.filterPlanetList,
    isPopup:state.isPopup
  });
  
  const mapDispatchToProps = dispatch => ({
    requestGetPlanets: () => dispatch(ACTIONS.requestGetPlanets()),
    refershPlanets: () => dispatch(ACTIONS.refershPlanets()),
    setFilterPlanetList: planets => dispatch(ACTIONS.setFilterPlanetList(planets)),
    setIsPopup: isPopup => dispatch(ACTIONS.setIsPopup(isPopup)),
  });

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Planets))