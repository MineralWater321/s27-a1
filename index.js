let http = require("http");

http.createServer(function(request, response) {
	//GET Request
	if(request.url == "/" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to Booking System');
	}
	if(request.url == "/profile" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Welcome to your profile!');
	}
	if(request.url == "/courses" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Here\'s our available courses');
	}
	if(request.url == "/addcourse" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Add a course to our resources');
	}
	if(request.url == "/updatecourse" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Update a course to our resources');
	}
	if(request.url == "/archivecourses" && request.method == "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.end('Archive courses to our resources');
	}

}).listen(4000);

console.log("Server is running localhost:4000");