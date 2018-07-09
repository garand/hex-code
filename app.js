let input = document.getElementById( 'input' );
let result = document.getElementById( 'result' );

input.focus();

input.addEventListener( 'keydown', function() {
	input.value = '';
});

input.addEventListener( 'keyup', function() {
	code = input.value.charCodeAt(0).toString(16);

	if ( code !== 'NaN' )
		result.innerHTML = code;
	else
		result.innerHTML = '';
});
