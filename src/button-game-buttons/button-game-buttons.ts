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

  onClicked(param:string):void {
    this.$rootScope.$emit('clickedButton', param);
    console.log('works' + param);
  }
}
