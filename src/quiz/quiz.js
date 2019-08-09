export default class QuizComponent {
  static create() {
    return {
      template: require('./quiz.html'),
      controller: QuizComponent,
    };
  }

  constructor() {
    this.kerdesek = {
      foldrajz: [
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
        },
      ],
      kutyas: [
        {
          kerdes: 'Csivava vagy Yorki?',
          opcio1: 'Csivava',
          opcio2: 'Border Collie',
          valasz: 2,
          selected: null,
        },
        {
          kerdes: 'Hany labujja van egy kutyanak?',
          opcio1: '18',
          opcio2: '20',
          opcio3: '4',
          valasz: 2,
          selected: null,
        },
      ],
      macskas: [
        {
          kerdes: 'Csivava vagy Yorki?',
          opcio1: 'Csivava',
          opcio2: 'Yorki',
          opcio3: 'Sziamiau',
          valasz: 3,
          selected: null,
        },
        {
          kerdes: 'Meddig er egy macska?',
          opcio1: 'A foldig',
          opcio2: 'Ameddig akar',
          opcio3: 'Nem',
          valasz: 1,
          selected: null,
        },
      ],
    };
    this.correct = 0;
    this.status = 'welcome';
    this.selectedTopic = '';
  }

  $onInit() {
    const shuffleTopic = this.selectedTopic === '' ? 'foldrajz' : this.selectedTopic;
    this.kerdesek[shuffleTopic] = this.shuffle(this.kerdesek[shuffleTopic]);
  }

  onTopicSelectorDropdown(topic) {
    console.log(topic + ' has been selected');
    this.selectedTopic = topic;
  /*    if (topic === 'foci'){
      return this.kerdesek.foldrajz;
    } else if (topic === 'kutyas') {
      return this.kerdesek.kutyas;
    }
    return this.kerdesek.macskas; */
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getTopic() {
    return this.kerdesek[this.selectedTopic];
  }

  onStart() {
    this.correct = 0;
    this.status = 'welcome';
    for (let i = 0; i < this.kerdesek[this.selectedTopic].length; i++) {
      this.kerdesek[this.selectedTopic][i].selected = null;
    }
    this.kerdesek[this.selectedTopic] = this.shuffle(this.kerdesek[this.selectedTopic]);
    this.selectedTopic = '';
  }

  onSubmit() {
    this.status = 'theEnd';
    for (let i = 0; i < this.kerdesek[this.selectedTopic].length; i++) {
      // console.log(this.kerdesek[this.selectedTopic]);
      // console.log(this.kerdesek[i].valasz.toString());
      // console.log(this.kerdesek[i].selected);
      if (this.kerdesek[this.selectedTopic][i].selected === this.kerdesek[this.selectedTopic][i].valasz.toString()) {
        console.log('correct');
        this.correct += 1;
      } else {
        console.log('not correct');
      }
    }
    console.log('correct answers: ' + this.correct);
  }


}
