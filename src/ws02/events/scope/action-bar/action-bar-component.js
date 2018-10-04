export default class ActionBarComponent {
  static create() {
    return {
      template: require('./action-bar.html'),
      controller: ActionBarComponent,
    };
  }

  constructor($scope, $rootScope) {
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.selectedUsers = [];

    this.$scope.$on('selectUsers', () => {
      console.log('That wont happen in the current layout');
    });

    this.$rootScope.$on('selectUsers', (event, data) => {
      this.selectedUsers = data.users;
    });

    this.$rootScope.$on('editUser', () => {
      this.isUserCreating = true;
    });

    this.$scope.$watch('$ctrl.newUser', (newValue, oldValue) => {
      this.createUserDisabled = newValue && !newValue.username && !newValue.email;

      // this.newUser.id = (this.newUser.id + 1) || 0;
    }, true);
  }

  pingUsers() {
    this.$rootScope.$broadcast('pingUsers');
  }

  createUser() {
    this.newUser = {};
    this.isUserCreating = true;
  }

  saveUser() {
    this.isUserCreating = false;
    this.$rootScope.$broadcast('saveUser', this.newUser);
  }
}
