function toDoHandler(event)
{
    event.preventDefault();
    const newObject = {text: toDoText.value, id: Date.now()};
    cacheList.push(newObject);
    saveToCache();
    addToList(newObject);
    toDoText.value = ""
}

function addToList(newObject)
{
    const newContent = document.createElement("li");
    const newText = document.createElement("text")
    newText.innerText = newObject.text;
    const newBtn = document.createElement("button");
    newBtn.innerText = "❌";
    newBtn.addEventListener("click", deleteInList);
    newContent.appendChild(newText);
    newContent.appendChild(newBtn);
    newContent.id = newObject.id;
    toDoList.appendChild(newContent);
}

function deleteInList(event)
{
    const parent = event.target.parentElement;
    cacheList = cacheList.filter((e) => {
        return e.id !== parseInt(parent.id)
    });
    saveToCache();
    parent.remove();
}

function saveToCache()
{
    localStorage.setItem("toDo", JSON.stringify(cacheList));
}

function loadCache()
{
    cacheList = JSON.parse(localStorage.getItem("toDo")) ?? [];
    if(cacheList)
    {
        cacheList.forEach(e => {
            addToList(e);
        });
    }
}

const toDoForm = document.querySelector("#toDo");
const toDoText = document.querySelector("#toDoText");
const toDoList = document.querySelector("#toDoList");
let cacheList;
loadCache();
toDoForm.addEventListener("submit", toDoHandler);