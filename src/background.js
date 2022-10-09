const images = ["1.jpg", "2.jpg"]
const now = new Date();
document.body.style.backgroundImage = `url(img/${images[now.getMinutes() % 2]})`;
