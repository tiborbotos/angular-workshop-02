export default class OrderingItemComponent {
  static create() {
    return {
      template: require('./ordering-item.html'),
      controller: OrderingItemComponent,
    };
  }

  newDrink = "";
  drinkList = ['szoda', 'limonade', 'rum'];

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
}
