import * as angular from 'angular';

export default class ButtonGameButtonsComponent {
  static create() {
    return {
      template: require('./button-game-buttons.html'),
      controller: ButtonGameButtonsComponent,
    };
  }
  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }
}
