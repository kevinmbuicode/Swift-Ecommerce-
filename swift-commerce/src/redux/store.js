//So, the createStore() Redux is now deprecated and configureStore() is recommended from @reduxjs/toolkit.
// import { configureStore } from "redux";
import { legacy_createStore as createStore } from 'redux';
import rootReducers from "./reducer";

const store = createStore(rootReducers);

export default store;
