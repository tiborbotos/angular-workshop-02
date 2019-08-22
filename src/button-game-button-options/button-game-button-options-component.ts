import * as angular from 'angular';

export default class ButtonGameButtonOptionsComponent {
  static create() {
    return {
      template: require('./button-game-button-options.html'),
      controller: ButtonGameButtonOptionsComponent,
      bindings: {
        isSelected: '<',
        char: '<',
      },
    };
  }
  isShow = false;
  randomTime = 0;
  randomTimeMin = 1000;
  randomTimeMax = 2000;
  colorArray = ['pink', 'green', 'red', 'blue', 'grey', 'deeppink', 'yellow', 'turquoise', 'orange'];
  randomColor = '';
  char:string;
  id:string;
  idOptions = ['A', 'B', 'C'];

  constructor(private $rootScope: angular.IRootScopeService,
              private $timeout: angular.ITimeoutService) {
    /* ngInject */
    this.id = this.idOptions[this.getRandomId(0, 3)];
    this.randomTime = this.getRandomTime(this.randomTimeMin, this.randomTimeMax);
    
    this.$rootScope.$on('clickedButton', (event, data) => {
      this.randomColor = this.colorArray[this.getRandomColor(this.colorArray)];
      this.$timeout(() => {
        console.log('timeout check out');
        this.char = '';
      }, 300 + this.randomTime);
    })
  }

  getRandomId(min:number = 0, max:number = 3) {
    return Math.floor(Math.random() * (max-min) + min);
  }

  getRandomTime(min:number, max:number) {
    return Math.random() * (max-min) + min;
  }

  getRandomColor(colorArray:Array<string>){
    return Math.floor(Math.random() * this.colorArray.length);
  }
}
