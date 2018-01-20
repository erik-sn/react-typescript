import * as React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Switch, Route, withRouter } from 'react-router-dom';

import { fetchUsers } from '@/actions/UserActions';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserForm from './UserForm';
import Nav from './Nav';
import NotFound from './NotFound';

interface IProps { fetchUsers: () => void; }

export class Application extends React.Component<IProps, {}> {
  public componentDidMount() {
    this.props.fetchUsers();
  }

  public render() {
    return (
      <div className="application__container">
        <Nav />
        <div className="application__content">
          <Switch>
            <Route path="/" exact component={UserList} />
            <Route path="/create" exact component={UserForm} />
            <Route path="/:id" component={UserDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default hot(module)(withRouter<any>(connect<{}, {}, {}>(null, { fetchUsers })(Application)));
