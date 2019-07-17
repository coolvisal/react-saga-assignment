// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    SETUSERNAME:"SETUSERNAME",
    SETPASSWORD:"SETPASSWORD",
    REQUEST_API_DATA:"REQUEST_API_DATA",
    RECEIVE_API_DATA:"RECEIVE_API_DATA"
  };
  // actions
  // const createItem = task => ({
  //   type: Types.CREATE_ITEM,
  //   payload: task
  // });
  
  // const deleteItem = id => ({
  //   type: Types.DELETE_ITEM,
  //   payload: id
  // });

  const setUserName = (userName) => ({
    type: Types.SETUSERNAME,
    payload: userName
  });

  const setPassword = (password) => ({
    type: Types.SETPASSWORD,
    payload: password
  });

  const requestAPIData = () => ({
    type: Types.REQUEST_API_DATA
  });

  const receiveAPIData = (data) => ({
    type: Types.RECEIVE_API_DATA,
    payload: data
  });
  
  export default {
    setUserName,
    setPassword,
    Types,
    requestAPIData,
    receiveAPIData
  };