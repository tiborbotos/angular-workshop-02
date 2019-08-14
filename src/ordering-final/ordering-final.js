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

  constructor($rootScope) {
    /* ngInject */
    this.$rootScope = $rootScope;
    this.$rootScope.$on('drinksOrdered', (event, drinkList) => {
      console.log(drinkList);
      this.finalDrinkList = [...drinkList];
    });
  }

  finalDrinkList = [];

  onSubmitOrder() {
    console.log('this is on submit order');
  }
}
