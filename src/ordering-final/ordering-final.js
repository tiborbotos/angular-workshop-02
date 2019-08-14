export default class OrderingFinalComponent {
  static create() {
    return {
      template: require('./ordering-final.html'),
      controller: OrderingFinalComponent,
      bindings: {
        bNameInput: '<',
      },
    };
  }

  onSubmitOrder() {
    console.log('this is on submit order');
  }
}
