function reqListener() {
	console.log(this.responseText);
}

let req = new XMLHttpRequest();
req.addEventListener('load', reqListener);
req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
req.send();

fetch('https://jsonplaceholder.typicode.com/todos/2')
	.then((response) => response.json())
	.then((json) => console.log(json));
