import * as angular from 'angular';

export default class ButtonGameAComponent {
  static create() {
    return {
      template: require('./button-game-a.html'),
      controller: ButtonGameAComponent,
    };
  }
  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }
}
