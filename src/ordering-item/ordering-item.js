export default class OrderingItemComponent {
  static create() {
    return {
      template: require('./ordering-item.html'),
      controller: OrderingItemComponent,
    };
  }

  newDrink = "";
  drinkList = ['szoda', 'limonade', 'rum'];
  editIndex = null;
  editedDrink = null;

  onAdd() {
    if (this.newDrink.length > 0) {
      this.drinkList.push(this.newDrink);
      this.newDrink = "";
    }
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
