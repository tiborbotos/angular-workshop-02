import * as angular from 'angular';

export default class ButtonGameComponent {
  static create() {
    return {
      template: require('./button-game.html'),
      controller: ButtonGameComponent,
    };
  }
}
