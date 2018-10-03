export default class ActionBarComponent {
  static create() {
    return {
      template: require('./action-bar.html'),
      controller: ActionBarComponent,
    };
  }
}
