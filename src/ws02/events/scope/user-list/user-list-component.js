/** @ngInject */
export default class UserListComponent {
  static create() {
    return {
      template: require('./user-list.html'),
      controller: UserListComponent,
    };
  }

  constructor($scope) {
    this.$scope = $scope;
    this.users = [];

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        this.$scope.$apply(() => {
          this.users = json;
        });
      });

    this.$scope.$on('selectDomain', (event, data) => {
      this.users.forEach((user) => {
        user.$selected = user.email.endsWith(data.domain);
      });

      const filteredUsers = this.users.filter(user => user.$selected);
      this.$scope.$emit('selectUsers', { users: filteredUsers });
    });

    this.$scope.$on('saveUser', (event, data) => {
      if (data.id) {
        const ind = this.users.findIndex((u) => u.id === data.id);
        this.users[ind] = data;
      } else {
        data.id = this.users.length + 1;
        this.users.push(data);
      }
    });
  }
}