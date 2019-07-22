import React from 'react'
import '../App.css';

const Planet = (props)=>{
//searchText
    const GetUpdatedName = (name) => {
        const startIndex = name.toLowerCase().indexOf(props.searchText);
        if(startIndex>-1){
            let str = name.slice(startIndex,startIndex+props.searchText.length).bold()
            return <div dangerouslySetInnerHTML={{__html:name.toUpperCase().replace(name.slice(startIndex,startIndex+props.searchText.length).toUpperCase(),str.toUpperCase())}} />
        }
        return <div>{name}</div>
    }

    return (<li className="li" onClick={()=>props.onClickPlanetHandler(props.planet)}>
                {/* {props.planet.name} */}
                {GetUpdatedName(props.planet.name)}
                Population: {props.planet.population}
    </li>)
}

export default Planet;