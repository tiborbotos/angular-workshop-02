export default class OrderingToolComponent {
  static create() {
    return {
      template: require('./orderingtool.html'),
      controller: OrderingToolComponent,
    };
  }
  constructor($rootScope, ordersService) {
    /* ngInject */
    this.isShow = false;
    this.nameInput = '';
    this.$rootScope = $rootScope;
    this.ordersService = ordersService;
    console.log($rootScope);
  }
}
