import { combineReducers, Reducer } from 'redux';
import { IStore } from '../interfaces/redux';

import UserReducer from './UserReducer';

const rootReducer: Reducer<IStore> = combineReducers({
  user: UserReducer,
});

export default rootReducer;
