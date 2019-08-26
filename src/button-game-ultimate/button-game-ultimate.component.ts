import * as angular from 'angular';

export default class ButtonGameUltimateComponent {
  static create() {
    return {
      template: require('./button-game-ultimate.html'),
      controller: ButtonGameUltimateComponent,
      bindings: {
      },
    };
  }
  isShow = false;
  randomTime = 0;
  randomTimeMin = 1000;
  randomTimeMax = 2000;
  colorArray = ['pink', 'green', 'red', 'blue', 'grey', 'deeppink', 'yellow', 'turquoise', 'orange'];
  randomColor = '';
  type: string;

  constructor(private $rootScope: angular.IRootScopeService,
              private $timeout: angular.ITimeoutService) {
    /* ngInject */
    this.randomTime = this.getRandomTime(this.randomTimeMin, this.randomTimeMax);
    const rnd = Math.random();
    this.type = rnd < 0.3 ? 'A' : (rnd < 0.6 ? 'B' : 'C');

    this.$rootScope.$on('clicked', (event, typeClicked) => {
      if (typeClicked === this.type) {
        this.randomColor = this.colorArray[this.getRandomColor(this.colorArray)];
        this.$timeout(() => {
          this.isShow = true;
        }, 1000);

        this.$timeout(() => {
          console.log('timeout check out');
          this.isShow = false;
        }, 1000 + this.randomTime);
      }
    });
  }
  getRandomTime(min:number, max:number) {
    return Math.random() * (max-min) + min;
  }

  getRandomColor(colorArray:Array<string>){
    return Math.floor(Math.random() * this.colorArray.length);
  }
}
