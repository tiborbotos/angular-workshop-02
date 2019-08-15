export default class OrderingItemComponent {
  static create() {
    return {
      template: require('./ordering-item.html'),
      controller: OrderingItemComponent,
    };
  }

  constructor($rootScope, ordersService) {
    /* ngInject */
    this.$rootScope = $rootScope;
    this.ordersService = ordersService;
  }

  newDrink = "";
  drinkList = ['aji szóda'];
  editIndex = null;
  editedDrink = null;
  errorMessage = '';

  onAdd() {
    this.errorMessage = '';
    const regex = RegExp(/\d/);
    if (regex.test(this.newDrink)){
      console.log('validated');
      this.drinkList.push(this.newDrink);
    } else {
      console.log('couldnt validate');
      this.errorMessage = 'order must include the quantity and the name of the drink';
    }
    this.newDrink = '';
  }

  onEnter(event){
  if (event.which === 13){
    this.onAdd();
    }
  }

  onEnterUpdate(event) {
    if (event.which === 13){
      this.onUpdate();
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
    this.errorMessage = '';
    console.log('clicked update');
    const regex = RegExp(/\d/);
    if (regex.test(this.editedDrink)){
      this.drinkList[this.editIndex] = this.editedDrink;
      this.editIndex = null;
    } else {
      this.errorMessage = 'order must include the quantity and the name of the drink';
    }
  }

  onCancel() {
    this.editIndex = null;
  }

  onSubmitOrder() {
    this.ordersService.ujSzamla(this.drinkList);
  }
}
