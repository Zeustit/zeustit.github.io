const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function letter (event) {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if(iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);
}

document.querySelector("h1").onmouseover = event => letter(event)
document.querySelector("#discord").onmouseover = event => letter(event)
document.querySelector("#telegram").onmouseover = event => letter(event)
