import * as angular from 'angular';

export default class ButtonGameFeedbackComponent {
  static create() {
    return {
      template: require('./button-game-feedback.html'),
      controller: ButtonGameFeedbackComponent,
    };
  }
  constructor(private $rootScope: angular.IRootScopeService) {
    console.log('Az AngularJS servicek azonnal elindulnak ahogy a bongeszo betolt');
  }
}
