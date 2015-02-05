var clearButton = document.getElementById('erase');

clearButton.addEventListener('click', clearCanvas);

function clearCanvas(canvas){
	var canvas = document.getElementById('canvas');
	canvas.width = canvas.width;
}