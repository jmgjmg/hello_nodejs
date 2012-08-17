var exec = require("child_process").exec;
var querystring = require("querystring");
var fs= require("fs");


function dir(response, posteddata) {
  console.log("Request handler 'dir' called");
  exec("dir", 
	   function (error, stdout, stderr) {
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(stdout);
		response.end();
	   }
   );
}

function init(response, posteddata) {
  console.log("Request handler 'init' called");
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, posteddata) {
  console.log("Request handler 'upload' called");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Received " + querystring.parse(posteddata)["text"]);
  response.end(); 
}

function show(response, posteddata) {
  console.log("Request handler 'show' called");
  fs.readFile("./tmp/test.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}


exports.dir =dir;
exports.init = init;
exports.upload = upload;
exports.show=show;