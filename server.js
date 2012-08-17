var http = require("http");
var url = require("url");

function startFunction(routeFunction, handle){
	http.createServer(function(request, response) {
      var posteddata = "";
      var pathname = url.parse(request.url).pathname;
      console.log("Received request for: " + pathname);
	  request.setEncoding("utf8");
	  request.addListener("data", function(moredata) {
          posteddata += moredata;
          console.log("Received POST chunk '" + moredata + "'.");
         });

      request.addListener("end", function() {
          routeFunction(handle, pathname, response, posteddata);
         });

	}).listen(8888);

	console.log("Server started");
}

exports.start = startFunction;