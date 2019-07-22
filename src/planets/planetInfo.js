import React from 'react';
import '../App.css';

const PlanetInfo = (props) => {
    return (
        <div className="li">
            Name:&nbsp; {props.planet.name} <br />
            population:&nbsp; {props.planet.population} <br />
            rotation_period:&nbsp; {props.planet.rotation_period} <br />  
            gravity:&nbsp; {props.planet.gravity} <br />
            terrain:&nbsp; {props.planet.terrain} <br />
            climate:&nbsp; {props.planet.climate} <br />
            diameter:&nbsp; {props.planet.diameter} <br />       
        </div>
    )
}

export default PlanetInfo;