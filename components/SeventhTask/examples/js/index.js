const css = document.createElement('style');

css.textContent = `
.parent {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	overflow: auto;
	background-color: black;
}

.child {
	width: 200px;
	height: 200px;
	background-color: #ff0000;
}
`;

document.head.appendChild(css);
