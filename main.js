const input = document.querySelector("#inputToDo");
const addBtn = document.querySelector("#button");
const list = document.querySelector("ul");
const msg = document.querySelector("#message");
const showCompleted = document.querySelector("p");
const todoArr = [];

let text;
let message;
let completedCount = 0;

addBtn.addEventListener(
    "click",

    function () {
        text = input.value;
        if(text.length == 0) {
        msg.innerHTML = "OBS! Skriv något först!"
        return;
        }
        msg.innerHTML = "";

        const todoObject = {};
        todoObject.todo = text;
        todoArr.push(todoObject);


        const item = document.createElement("li");
        list.appendChild(item);

        const itemLabel = document.createElement("span");
        itemLabel.innerText = text;

        item.appendChild(itemLabel);

        itemLabel.addEventListener(
            "click",

            function() {
                item.setAttribute("class", "completed");
                completedCount++;
            showCompleted.innerText = completedCount + " completed";
            }
        )
    }
    

)