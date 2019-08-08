export default class StartComponent {
  static create() {
    return {
      template: require('./start-component.html'),
      controller: StartComponent,
      bindings: {
        bStatus: '=',
      },
    };
  }
  onStart() {
    this.bStatus = 'inGame';
    console.log('this is the start');
  }
}
