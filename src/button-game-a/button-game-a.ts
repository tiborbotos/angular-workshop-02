import * as angular from 'angular';

export default class ButtonGameAComponent {
  static create() {
    return {
      template: require('./button-game-a.html'),
      controller: ButtonGameAComponent,
    };
  }
  isShow = false;
  randomTime = 0;
  randomTimeMin = 1000;
  randomTimeMax = 2000;

  constructor(private $rootScope: angular.IRootScopeService,
              private $timeout: angular.ITimeoutService) {
    /* ngInject */
    this.randomTime = this.getRandomTime(this.randomTimeMin, this.randomTimeMax);

    this.$rootScope.$on('clickedA', event => {
      this.$timeout(() => {
        console.log('timeout check in');
        this.isShow = true;
      }, 1000);

      this.$timeout(() => {
        console.log('timeout check out');
        this.isShow = false;
      }, 1000 + this.randomTime);
    })
  }

  getRandomTime(min:number, max:number) {
    return Math.random() * (max-min) + min;
  }
}
