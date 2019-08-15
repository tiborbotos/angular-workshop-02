import * as angular from 'angular';

export default class OrdersService {

  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }

  ujSzamla() {
    // TODO
    // this.$rootScope.$emit
  }

  foo() {}
}
