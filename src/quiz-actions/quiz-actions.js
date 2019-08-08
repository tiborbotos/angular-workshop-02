export default class QuizActionsComponent {
  static create() {
    return {
      template: require('./quiz-actions.html'),
      controller: QuizActionsComponent,
      bindings: {
        bStatus: '<',
        bOnSubmit: '&',
        bOnStart: '&',
      },
    };
  }

  parentSubmit() {
    if (this.bOnSubmit){
      this.bOnSubmit();
    }
  }

  parentStart() {
    if (this.bOnStart){
      this.bOnStart();
    }
  }
}
