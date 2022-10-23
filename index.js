const IMG_COUNT = 20;

const gallery = $("#gallery");
console.log(gallery)

for (let i = 1; i <= IMG_COUNT; i++)
    gallery.append(`<li><img src="images/i${i.toString().padStart(2, '0')}.jpg" alt="Leila" /></li>`);

console.log(gallery)