let http= require("http")
function reqhandler(req,resp){
    var date= new Date();
    var body= "<html><body bgcolor='lightgreen'><h1>Surya</h1><h3>Today is</h3>"+date+"</body></html>";
    var content_length= body.length;
    resp.writeHead(200,{
        'Content-Length':content_length,
        'Content-Type':'text/html'
    });
    resp.end(body);
}
let server=http.createServer(reqhandler);
server.listen(3000,"localhost");

