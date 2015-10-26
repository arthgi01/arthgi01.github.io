
        newToDo = function () {
        var list = document.querySelector("#hello");
        
        li = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.name = "done";
        checkBox.onclick = doneTask;

        var task = document.querySelector("#iChange").value;
        var toDo = document.createTextNode(task);
        
        li.appendChild(checkBox);
        li.appendChild(toDo);
        li.className = document.querySelector("#priority").value;
        list.appendChild(li);

        localSave('hello')

}
         
        doneTask = function () {
              if(this.checked) {
                     this.parentNode.classList.add("done");
                   }
              else {
                     this.parentNode.classList.remove("done");
                   }

              localSave('hello')
}



