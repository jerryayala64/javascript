// binary random Integer
// save file as randomInCreate.js
// to run type "node randomInCreate.js"
var randomInteger = function(val) {
	var ival = Math.random()*256;
	// console.log(ival);
	ival = Math.floor(ival);
	return ival;
}
// main 
var rInt ; 
var count = 37;
var i;
for (i = 0; i < 65536; i++){
rInt	= randomInteger();
if (rInt == 3)count++;
// console.log(rInt+",");

process.stdout.write(rInt+" ");
}
process.stdout.write("\n\n\n3 hit "+count+" times.");
