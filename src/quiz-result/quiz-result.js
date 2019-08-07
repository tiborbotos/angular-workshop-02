export default class QuizResultComponent {
  static create() {
    return {
      template: require('./quiz-result.html'),
      controller: QuizResultComponent,
      bindings: {
        bGameOn: '<',
        bCorrect: '<',
      },
    };
  }
}
