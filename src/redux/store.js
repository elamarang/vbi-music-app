import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  }; 

const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (e)
    {
      console.log(e)
    }
  };

const persistedState = loadState();
let middlewares = [thunk]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
  }
const store = createStore(rootReducer, 
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares)))

store.subscribe(() => {
    saveState({
        song: store.getState().song,
        searchField: store.getState().searchField,
        album: store.getState().album,
        playlist: store.getState().playlist
        });
  });

export default store;