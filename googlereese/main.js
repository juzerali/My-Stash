var fileio = require('../fileio');

String.prototype.replaceAt=function(index, char) {
      return this.substr(0, index) + char + this.substr(index+char.length);
   };
function reese(inp,out){
	var i,_i;

	var inx = [];
	var outx=[];

	inx=inp[0].split('');
	inx=inx.concat(inp[1].split(''));
	inx=inx.concat(inp[2].split(''));

	outx=out[0].split('');
	outx=outx.concat(out[1].split(''));
	outx=outx.concat(out[2].split(''));

	console.log(inx,outx);

	var uniqIn = inx.filter(function(ch, index){
		return inx.indexOf(ch) == index;
	});

	var uniqOut = outx.filter(function(ch, index){
		return outx.indexOf(ch) == index;
	});

	var map = {};
	//window.reversemap = {};
	for(i=0, _i=uniqIn.length; i<_i; i++){
		map[uniqIn[i]] = uniqOut[i];
		//window.reversemap[uniqOut[i]] = uniqIn[i];
	}
	map['q'] = 'z';
	map['z'] = 'q';
	
	return map;
}

/*
 our language is impossible to understand
 there are twenty six factorial possibilities
 so it is okay if you want to just give up
*/

var inp = ["ejp mysljylc kd kxveddknmc re jsicpdrysi", 
				"rbcpc ypc rtcsra dkh wyfrepkym veddknkmkrkcd", 
				"de kr kd eoya kw aej tysr re ujdr lkgc jv"];

var out = ["our language is impossible to understand", 
				"there are twenty six factorial possibilities", 
				"so it is okay if you want to just give up"]


var keys = reese(inp, out);


function translate(inp){
	for (var i=0, _i=inp.length; i<_i; i++){
		inp = inp.replaceAt(i, keys[inp.charAt(i)]);
	}
	return inp;
}

fileio.getTestCasesArray(function(cases){
	cases = cases.slice(1);console.log(cases);
	var i = 1
	,	output = [];

	cases.forEach(function(caselet){
		debugger;
		console.log(caselet);
		output[i-1] = "Case #" + (i) + ": " + translate(caselet);
		i++;
	});

	fileio.out(output, function(){
		process.exit(0);
	});
});