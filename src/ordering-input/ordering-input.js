export default class OrderingInputComponent {
  static create() {
    return {
      template: require('./ordering-input.html'),
      controller: OrderingInputComponent,
      bindings: {
        bShow: '=',
      },
    };
  }

  nameInput = '';
  ageInput = null;

    /* const name = document.getElementById('name');
    const form = document.getElementById('form');
    const errorElement = document.getElementById('error');

    form.addEventListener('submit', (e)=> {
      let messages = [];
      if (name.value === '' || name.value == null ){
        messages.push('name is required');
      }

      if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(', ');
      }
    }); */

  onNext() {
    console.log(this.bShow);
    this.bShow = true;
  }

  onNextClick() {
    console.log('input next clicked');
  }
}
