import * as React from 'react';
import { Link } from 'react-router-dom';

import User from '@/models/User';

interface IProps { user: User; }

const UserItem = ({ user }: IProps): JSX.Element => (
  <div className="user_item__container">
    <Link to={`/${user.id}`}>
      <span>{user.id}. {user.first} {user.last}</span>
    </Link>
  </div>
);

export default UserItem;
