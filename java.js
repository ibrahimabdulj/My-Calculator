let input = document.querySelector("#input")
let answer = document.querySelector("#answer")
let clear = document.querySelector("#clear")
let erase = document.querySelector("#erase")
let button = document.querySelectorAll("button")
let equals = document.querySelector(".equals")

let screenValue = []

clear.addEventListener("click", () => {
    screenValue = [""];
    answer.innerHTML = 0;
    input.className = "input";
    answer.className = "answer";

})


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match("erase")) {
            screenValue.push(btn.value)
            input.innerHTML = screenValue.join("");
            if (btn.classList.contains("nbtn")) {
                answer.innerHTML = eval(screenValue.join(""));
            }

        }
        if (btn.id.match("erase")) {
            screenValue.pop();
            input.innerHTML = screenValue.join("");
            answer.innerHTML = eval(screenValue.join(""));
        }
        if (btn.id.match("equals")) {
            screenValue.pop();
            input.className = "input"
            answer.className = "answer"
            answer.style.color = "yellow"
        }


        if (typeof eval(screenValue.join("")) == "undefined") {
            answer.innerHTML = 0
        }


    })
})