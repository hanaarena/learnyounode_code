// var sum = 0;
// for(var i = 2; i < process.argv.length; i++) {
// 	sum += parseInt(process.argv[i], 10) ;
// }
// console.log(sum);

// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// console.log(buffer.toString().split('\n').length - 1);

// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}

// 	if (data) {
// 		console.log(data.toString().split('\n').length - 1);
// 	}
// });

// var fs = require('fs')
//   , path = require('path');
// fs.readdir('./', function(err, files) {
// 	if (err) {
// 		console.log(err);
// 	}

// 	if (files) {
// 		for (var i in files) {
// 			if (path.extname(files[i]) === '.md') {
// 				console.log(files[i]);
// 			};
			
// 		};
// 	}
// });

// var fs = require('fs'),
//   , path = require('path');

// function firstModule(dirname, extname, cb) {
// 	fs.readdir(dirname, function(err, files) {
// 		if (err) {
// 			console.log(err);
// 		};

// 		if (files) {
// 			for (var i in files) {
// 				if (path.extname(files[i])) {
// 					return files[i];
// 				};
// 			};
// 		};
// 	});
// }

// module.exports = firstModule;

var firstModule = require('./firstModule');

firstModule('./', 'md', function(err, files) {
	for (var i in files) {
		console.log(files[i]);
	};
});
