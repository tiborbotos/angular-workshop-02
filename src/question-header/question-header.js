export default class QuestionHeaderComponent {
  static create() {
    return {
      template: require('./question-header.html'),
      controller: QuestionHeaderComponent,
    };
  }
}
