const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if(inputBox.value === ''){
        alert('Please enter a task');
    } else {
        // Create the new task directly in HTML
        listContainer.innerHTML += `<li>${inputBox.value}<span>\u00d7</span></li>`;
    }

    inputBox.value = "";
    saveData();
}


listContainer.addEventListener("click", function(e){
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
    localStorage.setItem("data", listContainer.innerHTML); //content in listContainer will be stored as "data" in the browser
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
saveData();