/** @ngInject */
export default class UserActionsComponent {
  static create() {
    return {
      template: require('./user-actions.html'),
      controller: UserActionsComponent,
    };
  }
}
