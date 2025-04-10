var x = document.getElementById("myform");
var y = document.getElementById("i1");
var z = document.getElementById("i2");

myform.addEventListener("submit",
    function(e) {
        e.preventDefault();
        create(y.value)
    });

function create(d) {
    var items = `<li>${d} <input type="checkbox" onclick="this.parentElement.style.textDecoration = this.checked ? 'line-through' : 'none'"> <button onclick="editEle(this)">Edit</button>  <button onclick="doneEle(this)">Done</button>
    <button onclick="deleteEle(this)">Delete</button></li>`;
    z.insertAdjacentHTML("beforeend", items);
    y.value = "";
    y.focus();
}

function deleteEle(ele) {
    ele.parentElement.remove();
}