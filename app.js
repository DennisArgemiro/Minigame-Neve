var qtdTrys = 0;

const buttons = [];
for (var i = 1; i <= 20; i++) {
  buttons[i] = document.getElementById(`btn-${i}`);
  const input = buttons[i];
  input.addEventListener("change", () => {
    clicked(input);
  });
}

function round() {
    const qtdRightButtons = Math.floor(Math.random() * 6) + 1;

    for (var i = 0; i <= qtdRightButtons; i++) {
        const randomPosition = Math.floor(Math.random() * 20) + 1;
        showWhereClick(buttons[randomPosition]);
    }
    
}
function clicked(input) {
    if (input.value == "here") {
        input.style.backgroundColor = "rgba(47, 204, 99, 0.5)";
    input.removeAttribute("value");

    if ( document.querySelector("input[value='here']") == null){
        setTimeout(()=>{round()}, 2000)
    }

    setTimeout(() => {
        input.style.backgroundColor = "rgba(47, 62, 204, 0.5)";
    }, 500);
    
} else {
    input.style.backgroundColor = "rgba(204, 47, 47, 0.5)";
    setInterval(() => {
        input.style.backgroundColor = "rgba(47, 62, 204, 0.5)";
    }, 500);
}
}


function showWhereClick(input) {
  input.value = "here";
  input.style.backgroundColor = "gray";
} 

round()