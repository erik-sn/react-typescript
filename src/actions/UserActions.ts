import Actions from './Actions';
import { IAction } from '@/interfaces/redux';
import User from '@/models/User';

const EXAMPLE_USERS = [
  new User({ id: 1, first: 'bob', last: 'smith' }),
  new User({ id: 2, first: 'jill', last: 'newman' }),
  new User({ id: 3, first: 'andrew', last: 'poulsen' }),
  new User({ id: 4, first: 'emily', last: 'hamlin' }),
  new User({ id: 5, first: 'julie', last: 'joyce' }),
];

export function fetchUsers(): IAction<User[]> {
  return {
    type: Actions.FETCH_USERS,
    payload: EXAMPLE_USERS,
  };
}

export function createUser(first: string, last: string): IAction<any> {
  return {
    type: Actions.CREATE_USER,
    payload: { first, last },
  };
}

export function deleteUser(id: string): IAction<string> {
  return {
    type: Actions.DELETE_USER,
    payload: id,
  };
}
