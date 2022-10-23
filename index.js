const IMG_COUNT = 20;

let htmlContent = "";
for (let i = 1; i <= IMG_COUNT; i++)
    htmlContent += `<li><img id="${i}" src="images/i${i.toString().padStart(2, '0')}.jpg" alt="Leila" /></li>`;

document.getElementById("gallery").innerHTML = htmlContent;

let index = IMG_COUNT;
let active = document.getElementById(index);
nextImg();

function nextImg() {
    index = index >= IMG_COUNT ? 1 : index + 1;
    updateActive();
}

function prevImg() {
    index = index <= 1 ? IMG_COUNT : index - 1;
    updateActive();
}

function updateActive() {
    active.classList.remove("active");
    active = document.getElementById(index);
    active.classList.add("active");
}