import User from '@/models/User';

export interface IUserReducer {
  userList: User[];
}

export interface IStore {
  user: IUserReducer;
}

export interface IAction<P> {
  type: string;
  payload: P;
  meta?: any;
}
