import * as React from 'react';
import { connect } from 'react-redux';

import User from '@/models/User';
import UserItem from './UserItem';
import { IStore } from '@/interfaces/redux';
import { deleteUser } from '@/actions/UserActions';

interface IProps { userList: User[]; deleteUser: (id: number) => void; }
interface IState { error: string; userId: string; }

export class UserList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      error: '',
      userId: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ userId: event.currentTarget.value });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const id = parseInt(this.state.userId, 10);
    if (id) {
      this.props.deleteUser(id);
      this.setState({ userId: '', error: '' });
    } else {
      this.setState({ error: 'Invalid id!' });
    }
  }

  public render(): JSX.Element {
    const { userList } = this.props;
    const { error, userId } = this.state;
    return (
      <div id="user_list__container">
        <h1>All Users:</h1>
        {userList.map(user => <UserItem key={user.id} user={user} />)}
        <form onSubmit={this.handleSubmit}>
          <h3>Delete user with ID:</h3>
          <input value={userId} onChange={this.handleChange} />
          <button type="submit">Delete</button>
          {error ? <p>{error}</p> : null}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: IStore) => ({
  userList: state.user.userList,
});

export default connect<{}, {}, {}>(mapStateToProps, { deleteUser })(UserList);
