const textBox = document.getElementById("text-box");
const containerList = document.getElementById("container-list");

function addTask(){
    if(textBox.value === ''){
        alert('You must write something!');
    }else {
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        containerList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value = '';
    saveData();
}

containerList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", containerList.innerHTML)
};

function showList(){
    containerList.innerHTML = localStorage.getItem("data");
}
showList();