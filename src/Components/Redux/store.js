const { combineReducers, createStore } = require("redux");

let reducer = combineReducers();

let Store = createStore(reducer);

export default Store;