import * as angular from 'angular';

export default class ButtonGameComponent {
  static create() {
    return {
      template: require('./button-game.html'),
      controller: ButtonGameComponent,
    };
  }
  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }
}
