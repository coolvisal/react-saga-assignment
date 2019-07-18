import ACTIONS from "../actions";

const defaultState = {
  userName:'',
  password:'',
  peoples:[],
  isLoading:false,
  isError:false,
  errorMessage:'',
  isAuthenticated:'false',
  planets:[],
  filterPlanetList:[]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SETUSERNAME:{
        const newState={ ...state, userName:action.payload}
        return newState;
    }
    case ACTIONS.Types.SETPASSWORD:{
      const newState={ ...state, password:action.payload}
      return newState;
    }
    case ACTIONS.Types.RECEIVE_API_DATA:{
      return {...state,
               peoples:action.payload
      }
    }
    case ACTIONS.Types.SET_ISLOADING:{
      return {...state,
        isLoading:action.payload
      }
    }
    case ACTIONS.Types.SET_ISERROR:{
      return {...state,
        isError:action.payload
      }
    }
    case ACTIONS.Types.SET_ERRORMESSAGE:{
      return {...state,
        errorMessage:action.payload
      }
    }
    case ACTIONS.Types.SET_ISAUTHENTICATED:{
      return {...state,
        isAuthenticated:action.payload
      }
    }
    case ACTIONS.Types.SET_PLANETS:{
      console.log('planets: ',action.payload)
      // const planets=state.planets;
      // action.payload.map(item=>{
      //   return planets.push(item)
      // })
      return {...state,
        planets:state.planets.concat(action.payload),
        filterPlanetList:state.planets.concat(action.payload)
      }
    }
    case ACTIONS.Types.REFRESH_PLANETS:{
      return {...state,
        planets:[]
      }
    }
    case ACTIONS.Types.SET_FILTERPLANETLIST:{
      return {...state,
        filterPlanetList:action.payload
      }
    }
    default:
      return state;
  }
};

export default todoReducer;