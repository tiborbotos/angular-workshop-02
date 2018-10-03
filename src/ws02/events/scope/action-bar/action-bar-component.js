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
  }
}
