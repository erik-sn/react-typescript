export interface IUser {
  id: number;
  first: string;
  last: string;
}

class User {
  public id: number;
  public first: string;
  public last: string;
  public name: string;

  constructor({ id, first, last}: IUser) {
    this.id = id;
    this.first = first;
    this.last = last;
    this.name = `${first} ${last}`;
  }
}

export default User;
