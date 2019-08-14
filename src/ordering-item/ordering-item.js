export default class OrderingItemComponent {
  static create() {
    return {
      template: require('./ordering-item.html'),
      controller: OrderingItemComponent,
    };
  }

  newDrink = "";
  drinkList = ['aji szóda'];
  editIndex = null;
  editedDrink = null;
  errorMessage = '';

  onAdd() {
    this.errorMessage = '';
    const regex = RegExp('^[0-9].+$');
    if (regex.test(this.newDrink)){
      console.log('validated');
      this.drinkList.push(this.newDrink);
    } else {
      console.log('couldnt validate');
      this.errorMessage = 'order must include a quantity and the name of the drink';
    }
    this.newDrink = '';
  }

  onEnter(event){
  if (event.which === 13){
    this.onAdd();
    }
  }

  onDelete(index) {
    this.drinkList.splice(index, 1);
  }

  onEditItem(index) {
    console.log('clicked edit');
    this.editIndex = index;
    this.editedDrink = this.drinkList[index];
  }

  onUpdate(){
    console.log('clicked update');
    this.drinkList[this.editIndex] = this.editedDrink;
    this.editIndex = null;
  }

  onCancel() {
    this.editIndex = null;
  }
}
