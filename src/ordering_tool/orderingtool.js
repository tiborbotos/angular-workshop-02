export default class OrderingToolComponent {
  static create() {
    return {
      template: require('./orderingtool.html'),
      controller: OrderingToolComponent,
    };
  }
}