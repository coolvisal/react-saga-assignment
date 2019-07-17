import ACTIONS from "../actions";

const defaultState = {
  userName:'',
  password:''
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.SETUSERNAME:{
        console.log(action.payload)
        const newState={ ...state, password:action.payload}
        return newState;
    }
    case ACTIONS.Types.SETPASSWORD:{
      console.log('reducers',action.payload)
      const newState={ ...state, userName:action.payload}
      return newState;
    }
    case ACTIONS.Types.RECEIVE_API_DATA:{
      console.log('RECEIVE_API_DATA: ',action.payload)
      return state;
    }
    default:
      return state;
  }
};

export default todoReducer;