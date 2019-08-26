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
    this.$rootScope.$emit('clicked', 'A');
  }

  onClickedB() {
    console.log('clicked B');
    this.$rootScope.$emit('clicked', 'B');
  }
  onClickedC() {
    console.log('clicked C');
    this.$rootScope.$emit('clicked', 'C');
  }
}
