const textBox = document.getElementById("text-box");
const containerList = document.getElementById("container-list");

function addTask(){
    if(textBox.value === ''){
        alert('You must write something!');
    }else {
        let li = document.createElement("li");
        li.innerHTML = textBox.value;
        containerList.appendChild(li);
    }
    textBox.value = '';
}