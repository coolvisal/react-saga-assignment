import { createStore, applyMiddleware  } from "redux";


import reducer from "./reducers";

export default function configureStore(middleware) {
  const store = createStore(reducer, applyMiddleware(middleware));
  return store;
}