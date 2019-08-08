export default class StartComponent {
  static create() {
    return {
      template: require('./start-component.html'),
      controller: StartComponent,
      bindings: {
        bStatus: '=',
        bSelectTopic: '&',
        bSelectedTopic: '<',
      },
    };
  }

  constructor() {

  }

  onStart() {
    this.bStatus = 'inGame';
    console.log('this is the start');
    if (this.bSelectTopic) {
      this.bSelectTopic({ topic: this.types });
    }
  }
}
