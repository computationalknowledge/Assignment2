var sqlite3 = require('sqlite3');
var http = require("http");

var file = "CIS.db";
var a = null;
var b = null; 
var db = new sqlite3.Database(file);
db.all("SELECT * from students", function(err, rows) {
    rows.forEach(function(row) {
        a = row.studentname;
        b = row.studentid;
    })
});
db.close();

http.createServer(function(request, response) {
    console.log("answering an incoming request");
response.writeHead(200,  {"Content-Type":  "text/plain"});
response.write("name: " + a);
response.end(" ID: " + b);
}).listen(8880);
