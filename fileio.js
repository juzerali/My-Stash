var fs = require('fs');

exports.getTestCasesArray = function(callback){
	var path = process.argv[2] || 'input.in';
	console.log(path);debugger;
	fs.readFile(path, 'utf8', function (err, data) {
		if(err) throw err;
  		callback(data.split('\n'));
	});
};
/*
exports.out = function(output, callback){
	var result = output.join('\n');
	fs.writeFile(process.argv[3] || "Output.out", result, 'utf8', function(err){
		if(err) throw err;
		console.log("\n\n\nSuccessfully Generated results\n\n\n");
		console.log(result);
		callback();
	}) 
};*/

exports.out = function(output, callback){
    output.forEach(function(op, index, array){
        array[index] = "Case #" + (index+1) + ": " + op;    
    });
    
	var result = output.join('\n');
	fs.writeFile(process.argv[3] || "Output.out", result, 'utf8', function(err){
		if(err) throw err;
		console.log("\n\n\nSuccessfully Generated results\n\n\n");
		console.log(result);
		callback();
	});
};