import * as angular from 'angular';

export default class ButtonGameComponent {
  static create() {
    return {
      template: require('./button-game.html'),
      controller: ButtonGameComponent,
    };
  }
  clickedChar:string;
  columnNumber = 15;
  rowNumber = 5;

  constructor(private $rootScope: angular.IRootScopeService,
              private $timeout: angular.ITimeoutService) {
    /* ngInject */
    this.$rootScope.$on('clickedButton', (event, data) => {
      this.$timeout(() => {
        console.log('timeout check in');
        this.clickedChar = data;
      }, 300);
    })
  }
}
