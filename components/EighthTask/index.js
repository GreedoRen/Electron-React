document.getElementById('toggle').onclick = function() {
	let div1 = document.getElementById('div1');
	let div2 = document.getElementById('div2');
	let div3 = document.getElementById('div3');
	div1.style.display = div1.style.display === 'none' ? 'block' : 'none';
	div2.style.display = div2.style.display === 'none' ? 'block' : 'none';
	div3.style.display = div3.style.display === 'none' ? 'block' : 'none';
};
