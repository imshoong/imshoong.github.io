const bgImages = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg'];

const bgImage = bgImages[Math.floor(Math.random() * bgImages.length)];

document.body.style.backgroundImage = `url('./images/${bgImage}')`;
