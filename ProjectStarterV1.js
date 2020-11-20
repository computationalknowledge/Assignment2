var sqlite3 = require('sqlite3');
var http = require("http");

var file = "CIS.db";

var db = new sqlite3.Database(file);
db.all("SELECT * from students", function(err, rows) {
    rows.forEach(function(row) {
        console.log(row.studentname, row.studentid);
    })
});
db.close();

http.createServer(function(request, response) {
    console.log("answering an incoming request");
response.writeHead(200,  {"Content-Type":  "text/plain"});
response.write("Hello NOV 20 ");
response.end();
}).listen(8880);
