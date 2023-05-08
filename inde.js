document.title = "typewriter"

let text = "my name is modupe paseda, i hail from ogun state, i'm passionate about tech";
test.style.fontSize = "2rem";
test.style.color = "black";
test.style.fontweight = "bold";


let type = document.getElementById("test")

let index = 0;

let speed = 200;


function typing() {


if (index < text.length ) {
    const newText = text.charAt(index)
    type.textContent += newText
    index++

    setTimeout(typing, speed)
    
}

}