/** @ngInject */
export default class UserActionsComponent {
  static create() {
    return {
      template: require('./user-actions.html'),
      controller: UserActionsComponent,
      bindings: {
        user: '=',
      },
    };
  }

  constructor($scope) {
    this.$scope = $scope;
  }

  selectDomain() {
    const domain = this.user.email.substring(this.user.email.lastIndexOf('.') + 1);

    this.$scope.$emit('selectDomain', {
      user: this.user,
      domain,
    });
  }
}
