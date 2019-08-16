import * as angular from 'angular';

export default class ButtonGameButtonsComponent {
  static create() {
    return {
      template: require('./button-game-buttons.html'),
      controller: ButtonGameButtonsComponent,
    };
  }

  constructor(private $rootScope: angular.IRootScopeService) {
    /* ngInject */
  }

  onClickedA() {
    console.log('clicked A');
    this.$rootScope.$emit('clickedA');
  }

  onClickedB() {
    console.log('clicked B');
    this.$rootScope.$emit('clickedB');
  }
}
