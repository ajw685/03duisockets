var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , arduino = require('./arduino');



app.listen(8888);

function handler (req, res) {
  fs.readFile(__dirname + '/socket.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading socket.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

testvar = 0;

io.sockets.on('connection', function(socket){
    //send data to client
    setInterval(function(){
        socket.emit('date', { 'date': new Date() });
    }, 1000);
    setInterval(function(){
        testvar++;
        socket.emit('test', { 'test': testvar });
    }, 750);
});