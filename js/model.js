export default class Model {
  constructor() {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem("todos"));
    if (!this.todos || this.todos.length < 1) {
      this.todos = [
        {
          id: 0,
          title: "Aprender JS",
          description: "ver tutoriales de JS",
          completed: false,
        },
      ];
      this.currentId = 1;
    } else {
      this.currentId = this.todos[this.todos.length - 1].id + 1;
    }
  }

  setView(view) {
    this.view = view;
  }

  getTodos() {
    return this.todos.map((todo) => ({ ...todo }));
  }

  addTodo(title, description) {
    const todo = {
      id: this.currentId++,
      title: title,
      description: description,
      completed: false,
    };
    this.todos.push(todo);
    console.log(this.todos);
    this.save();
    return { ...todo };
  }

  removeTodo(id) {
    const index = this.findTodo(id);
    this.todos.splice(index, 1);
    this.save();
    console.log(this.todos[index]);
  }

  toggleCompleted(id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    console.log(this.todos);
  }

  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  editTodo(id, values) {
    const index = this.findTodo(id);
    Object.assign(this.todos[index], values);
    this.save();
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}