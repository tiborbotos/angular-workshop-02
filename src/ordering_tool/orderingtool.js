export default class OrderingToolComponent {
  static create() {
    return {
      template: require('./orderingtool.html'),
      controller: OrderingToolComponent,
    };
  }
  constructor($rootScope) {
    /* ngInject */
    this.isShow = false;
    this.nameInput = '';
    this.$rootScope = $rootScope;
    console.log($rootScope);
  }
}
