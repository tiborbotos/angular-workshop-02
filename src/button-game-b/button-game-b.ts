import * as angular from 'angular';

export default class ButtonGameBComponent {
  static create() {
    return {
      template: require('./button-game-b.html'),
      controller: ButtonGameBComponent,
    };
  }
  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }
}
