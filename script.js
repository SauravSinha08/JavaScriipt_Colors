let boxes = document.querySelectorAll(".boxes");

function getcolor(){
    let heaxachar = "0123456789abcdef";
    var color = "#";

    for(let i = 0; i < 6; i++){
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + heaxachar[randomNumber]
    }
    return color;
}

function start(){
    boxes.forEach((box) => box.style.background = getcolor())
};

function randomNumber(){
  return Math.round(Math.random() * 500);
}

function number (){
  boxes.forEach((box) => box.innerHTML = randomNumber());
}


document.addEventListener("click", number)
document.addEventListener("click", start);