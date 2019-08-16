import * as angular from 'angular';

export default class ButtonGameAComponent {
  static create() {
    return {
      template: require('./button-game-a.html'),
      controller: ButtonGameAComponent,
    };
  }
  isShow = false;

  constructor(private $rootScope: angular.IRootScopeService) {
    /* ngInject */
    this.$rootScope.$on('clickedA', event => {
      this.isShow = !this.isShow;
    })
  }
}
