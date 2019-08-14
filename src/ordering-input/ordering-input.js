export default class OrderingInputComponent {
  static create() {
    return {
      template: require('./ordering-input.html'),
      controller: OrderingInputComponent,
      bindings: {
        bShow: '=',
        bNameInput: '=',
      },
    };
  }

  ageInput = null;

  onNext() {
    console.log(this.bShow);
    this.bShow = true;
  }
}
