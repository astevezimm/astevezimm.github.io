const IMG_COUNT = 20;

let htmlContent = "";
for (let i = 1; i <= IMG_COUNT; i++)
    htmlContent += `<li><img src="images/i${i.toString().padStart(2, '0')}.jpg" alt="Leila" /></li>`;

document.getElementById("gallery").innerHTML = htmlContent;