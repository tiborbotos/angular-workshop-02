import * as angular from 'angular';

export default class ButtonGameComponent {
  static create() {
    return {
      template: require('./button-game.html'),
      controller: ButtonGameComponent,
    };
  }
  clickedChar:string;
  randomTime = 0;
  randomTimeMin = 1000;
  randomTimeMax = 2000;

  constructor(private $rootScope: angular.IRootScopeService,
              private $timeout: angular.ITimeoutService) {
    /* ngInject */

    this.$rootScope.$on('clickedButton', (event, data) => {

      this.randomTime = this.getRandomTime(this.randomTimeMin, this.randomTimeMax);

     this.$timeout(() => {
        console.log('timeout check in');
       this.clickedChar = data;
      }, 1000);


    })
  }

  getRandomTime(min:number, max:number) {
    return Math.random() * (max-min) + min;
  }
}
