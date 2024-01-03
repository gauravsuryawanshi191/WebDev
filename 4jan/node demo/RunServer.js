let http= require("http")
function reqhandler(req,resp){
    resp.write("Hello, Welcome to node server!");
    resp.end();
}
let server=http.createServer(reqhandler);
server.listen(3000,"localhost");

