import {combineReducers} from 'redux';

import counterReducer from './counterReducer';
import postReducer from './postReducer';
import networkInfoReducer from './networkInfoReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counterReducer,
  postReducer,
  networkInfoReducer,
  userReducer,
});

export default rootReducer;
