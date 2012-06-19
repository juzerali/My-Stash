var fileio = require('../fileio');

/*******************************************
*   3x      >   (*)x-1,x,x+1 	|| x,x,x
*   3x+1    >   (*)x-1,x+1,x+1 	|| x,x,x+1
*   3x+2    >   (*)x,x,x+2 		|| x,x+1,x+1
********************************************
* 3 1 5 

* 3x+1 13:4 4,4,5 : 3,5,5
* 3x+2 11:3 3,3,5 : 3,4,4
* 3x   15:5 4,5,6 : 5,5,5 (*)
********************************************/
var output = [];


fileio.getTestCasesArray(function(input){
	var numTestCases = +input.shift();
	
	input.forEach(function(set, index, array){
		console.log("\n===================="+set+"====================");
		var scores = set.split(' ')
		,	success = 0
		,	list = [];
		var	count = +scores.shift()
		,	surprising = +scores.shift()
		,	p = +scores.shift();
		

		scores.forEach(function(score){
			debugger;
			score = +score;
			if(score==0 && p==0){
				success++;
			}
			else if(score!=0){
				var	quotient = Math.floor(score/3)
				,	remainder = score%3;
				if(remainder == 0 ) min = quotient;
				else if(remainder == 1){
					min = quotient+1;
				} 
				else if(remainder == 2) min=quotient+1;
				if(min >= p) success++;

				else if(min==p-1 && remainder!=1 && surprising>0){
					surprising--;console.log("Surprise:"+surprising);
					success++;
				}
			}
			console.log(score+":"+quotient+":"+remainder+":"+success);
		});
		output.push(success);
		console.log("\n=================");
	});

	fileio.out(output, function(){
		process.exit(0);
	});
});

/*
*/