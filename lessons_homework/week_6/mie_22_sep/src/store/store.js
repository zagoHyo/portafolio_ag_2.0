import {createStore } from "redux";
import combineReducers from '../reducers/combineReducers';
import { obtenerStateStorage, guardarStateStorage } from '../LocalStorage';

const storageState = obtenerStateStorage();

export const Store = createStore(
  combineReducers,
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(()=>{
  guardarStateStorage({
    citas: Store.getState().citas
  })
})
