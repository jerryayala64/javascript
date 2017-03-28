
var randomInteger = function(val) {
	var ival = Math.random()*26+65;
	// console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main 
var rInt ;
var i;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
letter = String.fromCharCode(rInt);
process.stdout.write(letter);
//console.log(letter);
//document.write(5+6);

}
