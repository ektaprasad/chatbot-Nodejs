const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const Chat = require('../models/chat');

server.listen(4000);

io.on('connection', function(socket) {
    console.log('user connected');
    socket.on('disconnect', function() {
        console.log('user disconnected')
    });
    socket.on('save-message',function(data) {
        console.log(data);
        io.emit('new-message', {message: data});
    });
})



router.get('/:room', function(req, res, next) {
  Chat.find({room:req.params.room}, function(error,chats) {
      if(error) return next(error);
      res.json(chats);
  });
});

router.post('/', function(req, res, next ) {
    Chat.create(req.body, function(err, post) {
        if(err) return next(err);
        res.json(post);
    });
});

router.get('/get', function(req, res, next ) {
    res.send('getting');
});

module.exports = router;