import * as React from 'react';
import { Link, match } from 'react-router-dom';
import { connect } from 'react-redux';

import { IStore } from '@/interfaces/redux';
import User from '@/models/User';

interface IParams { id: string; }
interface IProps { activeUser: User; match: match<IParams>; }

export const UserDetail = ({ activeUser }: IProps): JSX.Element => {
  if (!activeUser) {
    return <h1>User Not Found</h1>;
  }

  const { first, last } = activeUser;
  const email = `${first}.${last}@t-3.com`;
  return (
    <div id="user_detail__container">
      <Link to="/">Go Back</Link>
      <div id="user_detail__content">
        <h2>First Name: {first}</h2>
        <h2>Last Name: {last}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
};

function mapStateToProps(state: IStore, ownProps: IProps) {
  const { userList } = state.user;
  const { id } = ownProps.match.params;
  const userId = parseInt(id, 10);
  return {
    activeUser: userList.find(user => user.id === userId),
  };
}

export default connect(mapStateToProps)(UserDetail);
