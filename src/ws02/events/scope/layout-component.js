export default class LayoutComponent {
  static create() {
    return {
      template: require('./layout.html'),
      controller: LayoutComponent,
    };
  }

  newTodo = "water the plant";
  todoList = ['walk the dog', 'shopping'];

  onAdd(){
    if (this.newTodo.length > 0){
      this.todoList.push(this.newTodo);
      this.newTodo = "";
    }
  }

  onDelete(index){
    this.todoList.splice(index, 1);
  }

  onEnter(event){
    if (event.which === 13){
      this.onAdd();
    }
  }
}
