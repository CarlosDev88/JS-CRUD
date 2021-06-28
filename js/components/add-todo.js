import Alert from "./alert.js";

export default class AddTodo {
  constructor() {
    this.btn = document.getElementById("add");
    this.tittle = document.getElementById("title");
    this.description = document.getElementById("description");
    this.alert = new Alert("alert");
  }

  onClick(callBack) {
    this.btn.onclick = () => {
      if (title.value === "" || description.value === "") {
        this.alert.show("Tittle and description are required!");
      } else {
        this.alert.hide();
        callBack(this.tittle.value, this.description.value);
      }
    };
  }
}
