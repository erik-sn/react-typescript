import Actions from '../actions/Actions';
import { IAction, IUserReducer } from '../interfaces/redux';

export const initialState: IUserReducer = {
  userList: [],
};

export default (state: IUserReducer = initialState, action: IAction<any>): IUserReducer => {
  switch (action.type) {
    case Actions.FETCH_USERS: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case Actions.CREATE_USER: {
      const userIds = state.userList.map(user => user.id);
      const nextId = Math.max.apply(null, userIds) + 1;
      const newUser = { ...action.payload, id: nextId };
      return {
        ...state,
        userList: state.userList.concat([newUser]),
      };
    }
    case Actions.DELETE_USER: {
      return {
        ...state,
        userList: state.userList.filter(user => user.id !== action.payload),
      };
    }
    default:
      return state;
  }
};
