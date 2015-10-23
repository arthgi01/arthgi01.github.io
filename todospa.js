<script type = "text/javascript">

        newToDo = function () {
        var list = document.querySelector("#hello");
        
        li = document.createElement("li");
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        task = document.querySelector("#iChange").value;
        toDo = document.createTextNode(task);
        
        li.appendChild(checkBox);
        li.appendChild(toDo);
        li.className = document.querySelector("#priority").value;
        list.appendChild(li)

}

</script>
