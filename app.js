'use strict';

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}

const HEX = 'hex';
const CSS = 'css';

const input = document.querySelector( '#input' );
const result = document.querySelector( '#result' );
const outputToggle = document.querySelector('#cssContent');
let outputType = 'hex'; // hex || css
let currentCode = '';

outputToggle.addEventListener( 'change' , function() {
   if (outputToggle.checked) {
       outputType = CSS;
   } else {
       outputType = HEX;
   }
    result.innerHTML = getCode(input.value, outputType);
});

input.focus();

input.addEventListener( 'keydown', function() {
	input.value = '';
});

input.addEventListener( 'keyup', function() {
    result.innerHTML = getCode(input.value, outputType);
});

function getCode(inputValue, mode) {
    const code = inputValue.charCodeAt(0).toString(16);

    if ( code === 'NaN' ) {
        return '';
    } else if (mode === CSS) {
        return `\\${code.padStart(6, "0")}`;
    } else {
        return code;
    }
}
