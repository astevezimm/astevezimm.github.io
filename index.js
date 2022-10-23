const IMG_COUNT = 20;

let htmlContent = "";
for (let i = 1; i <= IMG_COUNT; i++)
    htmlContent += `<li id="${i}">
        <img src="images/i${i.toString().padStart(2, '0')}.jpg" alt="Leila" />
    </li>`;

const gallery = document.getElementById("gallery");
gallery.innerHTML = htmlContent;

for (let child of gallery.children)
    child.addEventListener("click", handleClick)

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

function handleClick(event) {
    const id = +event.target.parentElement.id;
    if (index === 1 && id === IMG_COUNT)
        prevImg();
    else if (index === IMG_COUNT && id === 1)
        nextImg();
    else if (id < index)
        prevImg();
    else if (id > index)
        nextImg();
}