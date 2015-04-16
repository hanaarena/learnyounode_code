// var sum = 0;
// for(var i = 2; i < process.argv.length; i++) {
// 	sum += parseInt(process.argv[i], 10) ;
// }
// console.log(sum);

// Ex 2
// var fs = require('fs');
// var buffer = fs.readFileSync(process.argv[2]);
// console.log(buffer.toString().split('\n').length - 1);

// Ex 3
// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, data) {
// 	if (err) {
// 		console.log(err);
// 	}

// 	if (data) {
// 		console.log(data.toString().split('\n').length - 1);
// 	}
// });

// Ex 4
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

// Ex 5
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

// Ex 6
// var firstModule = require('./firstModule')
//   , dir = process.argv[2]
//   , filterStr = process.argv[3];

// firstModule(dir, filterStr, function(err, files) {
// 	if (err) { return console.log(err);};

// 	for (var i in files) {
// 		console.log(files[i]);
// 	};
// });

// Ex 7
// var http = require('http')
//   , url = process.argv[2];

// http.get(url, function(response) {
// 	response.setEncoding('utf-8');
// 	response.on('data', function(data) {
// 		console.log(data);
// 	});
// });

// Ex 8
// var concat = require('concat-stream')
//   , http = require('http')
//   , url = process.argv[2];

// http.get(url, function(response) {
// 	response.pipe(
// 		concat(function(data) {
// 			console.log(data.toString().length);
// 			console.log(data.toString());
// 		})
// 	);
// });

// Ex 9
// var http = require('http')
//   , concat = require('concat-stream')
//   , urls = process.argv.slice(2)
//   , result = []
//   , count = 0;

// function printGet() {
// 	for(var i = 0; i < 3; i++)   {
// 		console.log(result[i]);
// 	};
// }

// function asyncGet(index) {
// 	http.get(urls[index], function(response) {
// 		response.pipe(concat(function(data) {
// 				//result.push(data.toString());
// 				result[index] = data.toString();
// 				count++;

// 				if(count == 3) printGet();
// 			})
// 		)
// 	});
// }

// for(var i = 0; i < 3; i++) {
// 	asyncGet(i);
// };
//
//Ex 10
var net = require('net');
var date = new Date();
var datetime = date.getFullYear() + '-0' + (date.getMonth()+1) + '-' + date.getDate() + ' ' + date.getHours() + ':0' + date.getMinutes(); 
var server = net.createServer(function(socket) {
	socket.end(datetime);
});

server.listen(process.argv[2]);