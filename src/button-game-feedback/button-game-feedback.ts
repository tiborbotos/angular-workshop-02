import * as angular from 'angular';

export default class ButtonGameFeedbackComponent {
  static create() {
    return {
      template: require('./button-game-feedback.html'),
      controller: ButtonGameFeedbackComponent,
    };
  }
}
