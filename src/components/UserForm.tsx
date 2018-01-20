import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createUser } from '@/actions/UserActions';

interface IProps { createUser: (first: string, last: string) => void; }
interface IState { [key: string]: string; first: string; last: string; }

export class UserForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      first: '',
      last: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  private handleChange(event: React.FormEvent<HTMLInputElement>): void {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const { first, last } = this.state;
    if (first && last) {
      this.props.createUser(first, last);
      this.resetForm(null);
    }
  }

  private resetForm(event: React.FormEvent<HTMLButtonElement> | null): void {
    event && event.preventDefault();
    this.setState({ first: '', last: '' });
  }

  public render(): JSX.Element {
    const { first, last } = this.state;
    return (
      <div id="user_form__container">
        <Link to="/">Go Back</Link>
        <form onSubmit={this.handleSubmit}>
          <h1>Create a new user</h1>
          <label htmlFor="first">First Name:
            <input type="text" name="first" id="first" value={first} onChange={this.handleChange} />
          </label>
          <label htmlFor="last">Last Name:
            <input type="text" name="last" id="last" value={last} onChange={this.handleChange} />
          </label>
          <button type="submit">Create User</button>
          <button type="button" onClick={this.resetForm} >Cancel</button>
        </form>
      </div>
    );
  }
}

export default connect<{}, {}, {}>(null, { createUser })(UserForm);
