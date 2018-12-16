import {createStore,combineReducers} from 'redux';
import productReducer from './reducers/reducer-product';
const allReducer = combineReducers({productReducer});

let store = createStore(allReducer);

export default store;