export default class QuizComponent {
  static create() {
    return {
      template: require('./quiz.html'),
      controller: QuizComponent,
    };
  }

  constructor() {
    this.kerdesek = [
      {
        kerdes: 'Hol van Afrika?',
        opcio1: 'Delen',
        opcio2: 'Eszakon',
        opcio3: 'A helyen',
        valasz: 1,
        selected: null,
      },
      {
        kerdes: 'Merre fuj a passzat szel?',
        opcio1: 'Hol igy hol ugy',
        opcio2: 'Eszakkelet',
        opcio3: 'Del nyugat',
        valasz: 1,
        selected: null,
      },
      {
        kerdes: 'Mikor pusztultak ki a dinok?',
        opcio1: 'Sose voltak',
        opcio2: '65 millio evvel ezelott',
        opcio3: '65 000 000 000',
        valasz: 2,
        selected: null,
      }];
    this.correct = 0;
    this.gameOn = true;
  }

  onStart() {
    this.correct = 0;
    this.gameOn = true;
    for (let i = 0; i < this.kerdesek.length; i++) {
      this.kerdesek[i].selected = null;
    }
  }

  onSubmit() {
    this.gameOn = false;
    for (let i = 0; i < this.kerdesek.length; i++) {
      console.log(this.kerdesek[i].valasz.toString());
      console.log(this.kerdesek[i].selected);
      if (this.kerdesek[i].selected === this.kerdesek[i].valasz.toString()) {
        console.log('correct');
        this.correct++;
      } else {
        console.log('not correct');
      }
    }
    console.log('correct answers: ' + this.correct);
  }
}
