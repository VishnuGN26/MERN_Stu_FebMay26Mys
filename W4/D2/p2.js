// createElement() & appendchild()
 const list = document.getElementById("list");
 const errMessage = document.getElementById("errMessage");
 let counter = 1;
  document.getElementById("addBtn").addEventListener("click", function(){
    const li= document.createElement("li");
    errMessage.textContent="";
    li.textContent = "Item" + counter++;
    list.appendChild(li);
  });
 
 document.getElementById("rmBtn").addEventListener("click", function () {
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    } else {
        errMessasge.textContent="No item to delete";
    }
});