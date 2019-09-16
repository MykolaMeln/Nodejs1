var express= require('express');
var path=require('path');
var app=express();

//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, "public")));

app.get('/api',function (req,res){
    res.send('API is running');
});
var log = require('./libs/log')(module);

app.get('/ErrorExample',function(req,res,next){
next(new Error('Random error!'));
});
app.get('/api/articles',function(req,res){
res.send('This is not implemented now');
});
app.post('/api/articles',function(req,res){
    res.send('This is not implemented now');
});
app.get('/api/articles/:id', function(req, res) {
res.send('This is not implemented now');
});
app.put('/api/articles/:id',function(req,res){
res.send('This is not implemented now');
});
app.delete('/api/articles/:id',function(req,res){
res.send('This is not implemented now');
});

app.use(function (req,res,next){
    res.status(404);
    log.debug('Not found URL: %s',req.url);
    res.send({error:'Not found'});
    return;
});
app.use(function(err,req,res,next){
res.status(err.status || 500);
log.error('Interal error(%d):%s',res.statusCode,err.message);
res.send({error:err.message});
   return;
});

app.listen(3000, function(){
console.log('Express server listening on port 3000');
   });
