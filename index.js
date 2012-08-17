var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var formidable = require("formidable");

var handle = {}
handle["/"] = requestHandlers.init;
handle["/init"] = requestHandlers.init;
handle["/upload"] = requestHandlers.upload;
handle["/dir"] = requestHandlers.dir;
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);
// Tutorial URL:
// http://www.nodebeginner.org/
