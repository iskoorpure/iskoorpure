var keys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};

var codePos = 0;
var rainbowPos = 0;

var rainbowColors = ['#E70000', '#FF8C00', '#FFEF00', '#00811F', '#0044FF', '#760089'];
var code = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

document.addEventListener('keydown', function(event) {
	var key = keys[event.keyCode];
	var requiredKey = code[codePos];

	if (key == requiredKey) {
		if (codePos == code.length) {
			setInterval(function() { rainbow("f0"); }, 151);
			setInterval(function() { rainbow("f1"); }, 157);
			setInterval(function() { rainbow("f2"); }, 161);
			codePos = 0;
		}
	codePos++;
	}
});

function rainbow(elementid) {
	if (rainbowPos == 6) rainbowPos = 0;
	document.getElementById(elementid).style.color = rainbowColors[rainbowPos];
	rainbowPos++;
}
