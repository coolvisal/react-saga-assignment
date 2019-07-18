// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    SETUSERNAME:"SETUSERNAME",
    SETPASSWORD:"SETPASSWORD",
    REQUEST_API_DATA:"REQUEST_API_DATA",
    RECEIVE_API_DATA:"RECEIVE_API_DATA",
    REQUEST_API_GETPLANETS:"REQUEST_API_GETPLANETS",
    SET_PLANETS:"SET_PLANETS",
    SET_ISLOADING:"SET_ISLOADING",
    SET_ISERROR:"SET_ISERROR",
    SET_ERRORMESSAGE:"SET_ERRORMESSAGE",
    SET_ISAUTHENTICATED:"SET_ISAUTHENTICATED",
    REFRESH_PLANETS:"REFRESH_PLANETS",
    SET_FILTERPLANETLIST:"SET_FILTERPLANETLIST"
  };

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

 const requestGetPlanets = () => ({
    type: Types.REQUEST_API_GETPLANETS
  });

  const receiverequestGetPlanets = (data) => ({
    type: Types.SET_PLANETS,
    payload: data
  });

  const receiveAPIData = (data) => ({
    type: Types.RECEIVE_API_DATA,
    payload: data
  });

  const setLoading = (isLoading) => ({
    type: Types.SET_ISLOADING,
    payload: isLoading
  });

  const setIsError = (isError) => ({
    type: Types.SET_ISERROR,
    payload: isError
  });

  const setErrorMessage = (errorMessage) => ({
    type: Types.SET_ERRORMESSAGE,
    payload: errorMessage
  });

  const setIsAuthenticated = (isAuthenticated) => ({
    type: Types.SET_ISAUTHENTICATED,
    payload: isAuthenticated
  });
  const refershPlanets = () => ({
    type: Types.REFRESH_PLANETS
  });
  const setFilterPlanetList = (planets) => ({
    type: Types.SET_FILTERPLANETLIST,
    payload:planets
  });
  
  export default {
    setUserName,
    setPassword,
    Types,
    requestAPIData,
    receiveAPIData,
    setLoading,
    setIsError,
    setErrorMessage,
    setIsAuthenticated,
    requestGetPlanets,
    receiverequestGetPlanets,
    refershPlanets,
    setFilterPlanetList
  };