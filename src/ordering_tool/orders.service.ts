import * as angular from 'angular';

export default class OrdersService {

  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }

  ujSzamla(drinkList:Array<string>) {
    let numb:number = 0;
    // TODO
    // this.$rootScope.$emit
    this.$rootScope.$emit('drinksOrdered', drinkList);
  }

  foo() {}
}
