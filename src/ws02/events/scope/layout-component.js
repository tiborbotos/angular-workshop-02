export default class LayoutComponent {
  static create() {
    return {
      template: require('./layout.html'),
      controller: LayoutComponent,
    };
  }

  newTodo = "";
  todoList = ['walk the dog', 'shopping'];
 // isEdited = false;
  editIndex = null;
  editedTodo = null;

  onAdd(){
    if (this.newTodo.length > 0){
      this.todoList.push(this.newTodo);
      this.newTodo = "";
    }
  }

  onEdit(index){
    this.editIndex = index;
    this.editedTodo = this.todoList[index];
  }

  onUpdate(){
    if (this.editedTodo.length >= 1){
      this.todoList[this.editIndex] = this.editedTodo;
      this.editIndex = null;
    }
  }

  onCancel(){
    this.editIndex = null;
  }

  onDelete(index){
    this.todoList.splice(index, 1);
  }

  onEnter(event){
    if (event.which === 13){
      this.onAdd();
    }
  }

  onOk(event){
    if (event.which === 13){
      console.log('enter');
      this.onUpdate();
    }
  }
}
