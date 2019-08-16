import * as angular from 'angular';

export default class ButtonGameBComponent {
  static create() {
    return {
      template: require('./button-game-b.html'),
      controller: ButtonGameBComponent,
    };
  }
  isShow = false;

  constructor(private $rootScope: angular.IRootScopeService) {
    /* ngInject */
    this.$rootScope.$on('clickedB', event => {
      this.isShow = !this.isShow;
    })
  }
}
