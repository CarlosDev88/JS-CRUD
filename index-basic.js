const button = document.getElementById("add");
const tittle = document.getElementById("title");
const description = document.getElementById("description");
const table = document.getElementById("table");
const alert = document.getElementById("alert");
let id = 1;

button.onclick = addTodo;

function addTodo() {
  if (tittle.value === "" || description.value === "") {
    console.error("Tittle and description are required");
    alert.classList.remove("d-none");
    alert.innerText = "Tittle and description are required!";
    return;
  }
  alert.classList.add("d-none");
  const row = table.insertRow();
  row.setAttribute("id", id++);
  row.innerHTML = `        
        <td>${tittle.value}</td>
        <td>${description.value}</td>
        <td class="text-center">
            <input type="checkbox" />
        </td>
        <td class="text-right">
            <button class="btn btn-primary mb-1">
            <i class="fa fa-pencil"></i>
            </button>
       
        </td>
  `;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("btn", "button", "btn-danger", "mb-1", "ml-1");
  removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
  removeBtn.onclick = (e) => {
    removeTodo(row.getAttribute("id"));
  };
  row.children[3].appendChild(removeBtn);
}

function removeTodo(id) {
  document.getElementById(id).remove();
}
