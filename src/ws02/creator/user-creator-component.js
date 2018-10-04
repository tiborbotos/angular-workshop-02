export default class UserCreator {
  static create() {
    return {
      controller: UserCreator,
      template: require('./user-creator.html'),
      bindings: {
        newUser: '=',
        onSave: '&',
      },
    };
  }

  create() {
    this.onSave();
  }
}
