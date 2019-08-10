export default class OrderingItemComponent {
  static create() {
    return {
      template: require('./ordering-item.html'),
      controller: OrderingItemComponent,
    };
  }

  newDrink = 'almafroccs';
  drinkList = ['szoda', 'limonade', 'rum'];
}
