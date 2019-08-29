let socket = new WebSocket('wss://localhost:5500');

socket.onmessage = function(event) {
	alert(`[message] Данные получены с сервера: ${event.data}`);
};
