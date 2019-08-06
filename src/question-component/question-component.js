export default class QuestionComponent {
  static create() {
    return {
      template: require('./question-component.html'),
      controller: QuestionComponent,
      bindings: {
        qKerdes: '<',
      },
    };
  }
  $onInit() {
    console.log(this.qKerdes);
  }
}
