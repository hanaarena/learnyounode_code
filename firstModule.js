var fs = require('fs')
  , path = require('path');

function firstModule(dirname, ext, callback) {
	fs.readdir(dirname, function(err, files) {
		if (err) {
			callback(err, null);
		};

		if (files) {
			var result = []
			  , exts = '.' + ext;
			for (var i in files) {
				if (path.extname(files[i]) == exts) {
					result.push(files[i]);
				};
			};
			// files.forEach(function(a) {
			// 	if (path.extname(a) == exts) {
			// 		result.push(a);
			// 	};
			// });
			callback(null, result);
		};
	});	
}

module.exports = firstModule;