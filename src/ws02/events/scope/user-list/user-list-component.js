/** @ngInject */
export default class UserListComponent {
  static create() {
    return {
      template: require('./user-list.html'),
      controller: UserListComponent,
    };
  }

  constructor() {
    this.users = [];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        this.users = json;
      });
  }
}
