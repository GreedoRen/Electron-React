let container = document.getElementById('container');
const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`;

for (let i = 0; i < getRandomInt(10, 100); i++) {
	container.innerHTML += `<div class="box" style="background: ${randomHsl()}  "></div>`;
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
